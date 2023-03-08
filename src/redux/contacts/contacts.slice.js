import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = [
  { id: 1, name: 'Harry Potter', phone: '459-12-56' },
  { id: 2, name: 'Hermione Granger', phone: '443-89-12' },
  { id: 3, name: 'Lord Voldemort', phone: '645-17-79' },
  { id: 4, name: 'Albus Dumbledor', phone: '227-91-26' },
  { id: 5, name: 'Severus Snape', phone: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContactAction: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare(id, name, phone) {
        return {
          payload: {
            id,
            name,
            phone,
          },
        };
      },
    },
    deleteContactAction(state, action) {
      const id = action.payload;
      return state.filter(contact => contact.id !== id);
    },
  },
});

const { addContactAction, deleteContactAction } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;

export { addContactAction, deleteContactAction, contactsReducer };
