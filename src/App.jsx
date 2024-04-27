import React, { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? initialState;
    return parsedContacts && parsedContacts.length > 0
      ? parsedContacts
      : initialState;
  });
  const [filter, setFilter] = useState("");
  const onChangeFilter = (evt) => {
    setFilter(evt.target.value);
  };
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const onAddUser = (formData) => {
    const newUser = {
      id: nanoid(),
      ...formData,
    };
    setContacts((prevstate) => [...prevstate, newUser]);
  };
  const onDeleteUser = (id) => {
    console.dir(id);
    setContacts((prevstate) =>
      prevstate.filter((contact) => contact.id !== id)
    );
  };
  const filtredUsers = contacts.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddUser={onAddUser} />
      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList contacts={filtredUsers} onDeleteUser={onDeleteUser} />
    </div>
  );
}

export default App;
