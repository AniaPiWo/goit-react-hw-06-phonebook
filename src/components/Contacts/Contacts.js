import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAction } from 'redux/contacts/contacts.actions';
import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts);
  const filterName = useSelector(store => store.filters.name);

  const visibleNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  console.log(visibleNames);

  const onContactDelete = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <ul className={css.list}>
      {visibleNames.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            id={contact.id}
            className={css.deleteBtn}
            type="button"
            onClick={() => onContactDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
