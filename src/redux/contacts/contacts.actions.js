export const ContactsActions = {
  ADD_CONTACT: 'contacts/addContact',
  DELETE_CONTACT: 'contacts/deleteContact',
};

export const addContactAction = (id, name, phone) => ({
  type: ContactsActions.ADD_CONTACT,
  payload: {
    id,
    name,
    phone,
  },
});

export const deleteContactAction = id => ({
  type: ContactsActions.DELETE_CONTACT,
  payload: { id },
});
