import React, { useState, useEffect, useContext } from 'react';
import { labels } from '../../constants';
import { getPhoneMask, paramsValidationEdit } from '../../utils/functions';
import { editContact } from '../../service/apiFunctions';
import ContactsContext from '../../contexts/contactsContext';
import { Container, TitleView, Title, Input, Button, ButtonsView, ButtonText, Separator, InputsView } from './styles';

const EditContact = ({ route, navigation }) => {
	const { id, name, phoneNumber, city } = route.params.contact;
	const { contactState, contactDispatch } = useContext(ContactsContext);

	const [newName, setName] = useState(name);
	const [newPhoneNumber, setPhoneNumber] = useState(phoneNumber);
	const [newCity, setCity] = useState(city);
	const [disabledButton, setDisabledButton] = useState(true);

	function maskPhone(value) {
		const phoneMasked = getPhoneMask(value);
		setPhoneNumber(phoneMasked);
	}

	async function newContact() {
		try {
			const editedContact = await editContact(id, newName, newPhoneNumber, newCity);
			contactDispatch({ type: 'editContact', payload: editedContact });
			setDisabledButton(true);
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const params = paramsValidationEdit(name, phoneNumber, city, newName, newPhoneNumber, newCity);
		setDisabledButton(params);

	}, [newName, newPhoneNumber, newCity]);

	return (
		<Container>
			<TitleView>
				<Title>{labels.editSubtitle}</Title>
			</TitleView>
			<Separator />
			<InputsView>
				<Input
					value={newName}
					onChangeText={(value) => setName(value)}
					placeholder="Name" />
				<Input
					keyboardType={'number-pad'}
					value={newPhoneNumber}
					onChangeText={(value) => maskPhone(value)}
					placeholder="Phone number" />
				<Input
					value={newCity}
					onChangeText={(value) => setCity(value)}
					placeholder="City" />
			</InputsView>
			<ButtonsView>
				<Button
					onPress={() => newContact()}
					disabled={disabledButton}>
					<ButtonText
						disabled={disabledButton}>
						{labels.edit}
					</ButtonText>
				</Button>
				<Button
					onPress={() => navigation.goBack()}
					bordered>
					<ButtonText
						bordered>
						{labels.goBack}
					</ButtonText>
				</Button>
			</ButtonsView>
		</Container>
	)
}

export default EditContact;
