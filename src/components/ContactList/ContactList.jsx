import React from "react";
import { nanoid } from "nanoid";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteUser }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li className={css.item} key={nanoid()}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDeleteUser={onDeleteUser}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
