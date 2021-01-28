import React, { useEffect, useContext } from 'react';
import { labels, routesNames } from '../../constants';
import { getContacts, deleteContact } from '../../service/apiFunctions';
import ContactsContext from '../../contexts/contactsContext';
import {
	Container, TitleView, Separator, Title, ScrollView, ButtonView, Scroll, Button, List, Modal, ModalView, CenteredView,
	TextWithoutContact, NameView, PhotoView, InfosView, TextName, TextPhone, ListIcon, OptionsView, OptionButton, ButtonIcon,
	ModalTitle, ButtonsView, ModalButton, ButtonText, ModalSubtitle
} from './styles';

const Contacts = ({ navigation }) => {
	const { contactState, contactDispatch } = useContext(ContactsContext);

	useEffect(() => {

		funcGetContacts();
	}, [])

	async function funcGetContacts() {
		try {
			const allContacts = await getContacts();
			contactDispatch({ type: 'updateContacts', payload: allContacts });

		} catch (error) {
			console.log(error)
		}
	}

	async function delContact() {
		try {
			await deleteContact(contactState.idSelected);
			contactDispatch({ type: 'deleteContact', payload: contactState.idSelected });
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Container>
			<TitleView>
				<Title>{labels.homeSubtitle}</Title>
			</TitleView>
			<Separator />
			<ScrollView>
				<Scroll>
					{contactState.contacts.length == 0 && contactState.loadingContacts === false ?
						<TextWithoutContact>
							{labels.withoutContats}
						</TextWithoutContact>
						:
						contactState.contacts.map((contact, index) => {
							return (
								<List key={index}>
									<NameView>
										<PhotoView />
										<InfosView>
											<TextName>{contact.name}</TextName>
											<TextPhone>{contact.phoneNumber}</TextPhone>
										</InfosView>
									</NameView>
									<OptionsView>
										<OptionButton onPress={() => navigation.navigate(routesNames.EditContact, { contact })}>
											<ListIcon type="pencil" />
										</OptionButton>
										<OptionButton onPress={() => contactDispatch({ type: 'showModal', payload: contact })}>
											<ListIcon type="trash" />
										</OptionButton>
									</OptionsView>
								</List>
							)
						})}
				</Scroll>
			</ScrollView>
			<ButtonView>
				<Button onPress={() => navigation.navigate(routesNames.RegisterContact)}>
					<ButtonIcon />
				</Button>
			</ButtonView>
			<Modal
				transparent={true}
				presentationStyle='overFullScreen'
				visible={contactState.showModal} >
				<CenteredView>
					<ModalView>
						<ModalTitle>{labels.youSure}</ModalTitle>
						<ModalSubtitle>{labels.youWant}</ModalSubtitle>
						<ModalSubtitle>{`${contactState.contactSelected} ${labels.yourContacts}`}</ModalSubtitle>
						<ButtonsView>
							<ModalButton onPress={() => contactDispatch({ type: 'closeModal'})}>
								<ButtonText>{labels.cancel}</ButtonText>
							</ModalButton>
							<ModalButton delete>
								<ButtonText 
									onPress={() => delContact()}
									delete>{labels.delete}</ButtonText>
							</ModalButton>
						</ButtonsView>
					</ModalView>
				</CenteredView>
			</Modal>
		</Container>
	)
}

export default Contacts;
