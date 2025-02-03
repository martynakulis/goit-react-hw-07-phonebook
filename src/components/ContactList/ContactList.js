import React from 'react';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/selectors';
import { selectFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          return (
            <li key={contact.id} className={css.listItem}>
              {contact.name} : {contact.number}
              {'  '}
              <button
                id={contact.id}
                onClick={handleDelete}
                className={css.buttons}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
