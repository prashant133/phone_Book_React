'use client'
import { useState } from 'react';

export default function PhoneBook(props) {
  const [contacts, setContacts] = useState(props.contacts);
  const [newContact, setNewContact] = useState({ id: null, name: "", phone: "" });
  

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const addContact = () => {
    setNewContact({ ...newContact, id: contacts.length + 1 });
    setContacts([...contacts, newContact]);
    setNewContact({ id: null, name: "", phone: "" });
  };

  const deleteContact =  (id) =>{
    const updatedContacts = contacts.filter((contact)  => contact.id !== id);
    setContacts(updatedContacts)
  }

  return (
    <>
      <div>
        <h2>PhoneBook</h2>
      </div>
      <div>
        <p>Name</p>
        <input type="text" name="name" value={newContact.name} onChange={handleInputChange} />
        <p>Phone</p>
        <input type="text" name="phone" value={newContact.phone} onChange={handleInputChange} />
        <br />
        <button onClick={addContact}>Add</button>
      </div>
      <br />

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
