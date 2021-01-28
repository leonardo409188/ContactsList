import api from './httpConfig';
import { labels } from '../constants';

export async function getContacts() {
	try {
		const response = await api.get('/contacts/?_sort=name&_order=cres');
		return response.data;

	} catch (error) {
		console.log(labels.error);
	}
}

export async function createContact(name, phoneNumber, city) {
	try {
		const id = Date.now();
		const response = await api.post('/contacts', { id, name, phoneNumber, city });
		return response.data;

	} catch (error) {
		console.log(labels.error);
	}
}

export async function deleteContact(id) {
	try {
		await api.delete(`/contacts/${id}`);
		return id;

	} catch (error) {
		console.log(labels.error);
	}
}

export async function editContact(id, name, phoneNumber, city) {
	try {
		await api.put(`/contacts/${id}`, { id, name, phoneNumber, city });
		return { id, name, phoneNumber, city };

	} catch (error) {
		console.log(labels.error);
	}
}
