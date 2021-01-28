import React, { useEffect, useContext } from 'react';
import { labels } from '../../constants';
import { getPhoneMask, paramsValidationRegister } from '../../utils/functions';
import { createContact } from '../../service/apiFunctions';
import ContactsContext from '../../contexts/contactsContext';
import { Container, TitleView, Title, Separator, Input, Button, InputsView, ButtonsView, ButtonText } from './styles';

const RegisterContact = ({ navigation }) => {
	const { contactState, contactDispatch } = useContext(ContactsContext);
	const { name, phoneNumber, city, disabledButton } = contactState;

	function maskPhone(value) {
		const phoneMasked = getPhoneMask(value);
		contactDispatch({ type: 'uptadePhoneNumber', payload: phoneMasked });
	}

	async function newContact() {
		try {
			const contact = await createContact(name, phoneNumber, city);
			contactDispatch({ type: 'addContact', payload: contact });
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const params = paramsValidationRegister(name, phoneNumber, city);
		contactDispatch({ type: 'updateButton', payload: params });

	}, [name, phoneNumber, city]);

	return (
		<Container>
			<TitleView>
				<Title>{labels.registerSubtitle}</Title>
			</TitleView>
			<Separator />
			<InputsView>
				<Input
					value={contactState.name}
					onChangeText={(value) => contactDispatch({ type: 'uptadeName', payload: value })}
					placeholder="Name" />
				<Input
					keyboardType={'number-pad'}
					value={phoneNumber}
					onChangeText={(value) => maskPhone(value)}
					placeholder="Phone number" />
				<Input
					value={city}
					onChangeText={(value) => contactDispatch({ type: 'updateCity', payload: value })}
					placeholder="City" />
			</InputsView>
			<ButtonsView>
				<Button
					onPress={() => newContact()}
					disabled={disabledButton}>
					<ButtonText
						disabled={disabledButton}>
						{labels.register}
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

export default RegisterContact;
