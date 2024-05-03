import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsSlice } from './contactsSlice';
import { filtersSlice } from './filtersSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['contacts'],
};

const rootReducer = combineReducers({
	contacts: contactsSlice.reducer,
	filter: filtersSlice.reducer,
});

const reducerContacts = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: reducerContacts,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistR = persistStore(store);
