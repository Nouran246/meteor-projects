import React from "react";
import { ContactsCollection } from "../api/ContactsCollections";
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export const ContactList = () => {
  // Subscribing to the 'contacts' publication
  const { contacts, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('contacts');
    // Wait until the subscription is ready
    if (!subscription.ready()) {
      return { contacts: [], isLoading: true };
    }

    // Return contacts when subscription is ready
    return { contacts: ContactsCollection.find({}).fetch(), isLoading: false };
  });

  // Display loading message while subscription is not ready
  if (isLoading) {
    return <p>Loading contacts...</p>;
  }

  return (
    <>
      <h3>Contact List</h3>
      <ul>
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <li key={contact.email}>
              {contact.name} - {contact.email}
            </li>
          ))
        ) : (
          <p>No contacts available</p>
        )}
      </ul>
    </>
  );
};
