import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const initialState = { items: [], isLoading: false, error: null };

const getActions = type =>
	isAnyOf(fetchContacts[type], addContact[type], deleteContact[type]);

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	extraReducers: builder =>
		builder
			.addCase(fetchContacts.fulfilled, (state, actions) => {
				state.items = actions.payload;
			})
			.addCase(addContacts.fulfilled, (state, actions) => {
				state.items = [...state.items, actions.payload];
			})
			.addCase(deleteContacts.fulfilled, (state, actions) => {
				const index = state.items.findIndex(
					contact => contact.id === actions.payload
				);
				state.items.splice(index, 1);
			})
			.addMatcher(getActions('pending'), state => {
				state.isLoading = true; // Установка прапора isLoading true
			})
			.addMatcher(getActions('rejected'), (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addMatcher(getActions('fulfilled'), state => {
				state.isLoading = false;
				state.error = null;
			}),
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
