import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
	reducer: {
		contacts: contactsReducer, // Редюсер для керування станом контактів
		filter: filtersReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
