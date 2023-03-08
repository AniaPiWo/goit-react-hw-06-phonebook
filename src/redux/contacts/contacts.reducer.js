const initialContactsState = [
  { id: 1, name: 'Harry Potter', phone: '459-12-56' },
  { id: 2, name: 'Hermione Granger', phone: '443-89-12' },
  { id: 3, name: 'Lord Voldemort', phone: '645-17-79' },
  { id: 4, name: 'Albus Dumbledor', phone: '227-91-26' },
  { id: 5, name: 'Severus Snape', phone: '227-91-26' },
];

export const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      const { id, name, phone } = action.payload;
      return state.concat({ id, name, phone });
    }
    case 'contacts/deleteContact': {
      const { id } = action.payload;
      return state.filter(contact => contact.id !== id);
    }
    default:
      return state;
  }
};
