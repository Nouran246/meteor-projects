import React from "react";
import { ContactsCollection } from "../api/ContactsCollections";
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export const ContactList = () => {
  // Ensure that you are subscribing to the collection
  useTracker(() => {
    Meteor.subscribe('contacts'); // Ensure that the subscription is set up in your server
  });

  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch();
  });

  return (
    <>
      <h3>Contact List</h3>
      <ul>
        {contacts.map(contact => (
          <li key={contact.email}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </>
  );
};
