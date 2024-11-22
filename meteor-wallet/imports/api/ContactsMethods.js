import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from './ContactsCollections';

Meteor.methods({
  'contacts.insert'({ name, email, imageUrl }) {
    // Validate inputs
    if (!name || !email || !imageUrl) {
      throw new Meteor.Error('Invalid arguments', 'All fields are required.');
    }

    try {
      // Insert into the database
      ContactsCollection.insertAsync({ name, email, imageUrl });
    } catch (error) {
      throw new Meteor.Error('Database error', error.message);
    }
  },
});
