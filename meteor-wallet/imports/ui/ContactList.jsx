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
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Contact List
        </h3>
        <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
          {contacts.map((person, personIdx) => (
            <li key={personIdx} className="py-4 flex items-center justify-between space-x-3">
              <div className="min-w-0 flex-1 flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                  <p className="text-sm font-medium text-gray-500 truncate">{person.email}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};
