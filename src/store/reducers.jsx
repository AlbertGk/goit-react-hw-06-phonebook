import { createAction, createReducer } from '@reduxjs/toolkit';
import { addContact, filterContacts } from '../store/actions';

const initialState = {
  items: [],
  filter: '',
};

export const contactReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.items = [...state.items, action.payload];
    })
    .addCase(filterContacts, (state, action) => {
      state.items = [action.payload];
    });
});
