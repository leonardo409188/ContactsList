import React, { createContext, useReducer } from 'react';
import { compare } from '../utils/functions';

const ContactsContext = createContext({});

const initialState = {
	contacts: [],
	loadingContacts: true,
	name: '',
	phoneNumber: '',
	city: '',
	disabledButton: true,
	showModal: false,
	contactSelected: null,
	idSelected: null
}

const actions = {
	updateContacts(state, action) {
		return {
			...state,
			contacts: action.payload,
			loadingContacts: false,
		};
	},
	addContact(state, action) {
		return {
			...state,
			contacts: [...state.contacts, action.payload].sort(compare),
			name: '',
			phoneNumber: '',
			city: '',
			disabledButton: true
		}
	},
	editContact(state, action) {
		const updated = action.payload;
		return {
			...state,
			disabledButton: true,
			contacts: state.contacts.map(contact => contact.id == updated.id ? updated : contact)
		}
	},
	deleteContact(state, action) {
		return {
			...state,
			showModal: false,
			contacts: state.contacts.filter(contact => contact.id != action.payload)
		}
	},
	uptadeName(state, action) {
		return {
			...state,
			name: action.payload
		};
	},
	uptadePhoneNumber(state, action) {
		return {
			...state,
			phoneNumber: action.payload
		};
	},
	updateCity(state, action) {
		return {
			...state,
			city: action.payload
		};
	},
	updateButton(state, action) {
		return {
			...state,
			disabledButton: action.payload
		};
	},
	showModal(state, action) {
		const { id, name } = action.payload
		return {
			...state,
			showModal: true,
			contactSelected: name,
			idSelected: id
		}
	},
	closeModal(state) {
		return {
			...state,
			showModal: false,
			contactSelected: null,
			idSelected: null
		}
	}
}

export const ContactsProvider = (props) => {
	function reducer(state, action) {
		const func = actions[action.type]
		return func ? func(state, action) : state
	}

	const [contactState, contactDispatch] = useReducer(reducer, initialState);

	return (
		<ContactsContext.Provider value={{ contactState, contactDispatch }}>
			{props.children}
		</ContactsContext.Provider>
	)
}

export default ContactsContext;
