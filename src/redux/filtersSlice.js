import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
	name: 'filter',
	initialState: { name: '' },
	reducers: {
		changeFilter(state, action) {
			return { name: action.payload };
		},
	},
});

export const { changeFilter } = filtersSlice.actions;
