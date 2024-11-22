import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../imports/api/ContactsCollections';  // Correct import
import '../imports/api/ContactsMethods'; // Ensure this is imported for any methods you may use

Meteor.startup(() => {
  // Any startup logic can go here
  Meteor.publish('contacts', function () {
    return ContactsCollection.find();  // Publish all contacts to the client
  });
});
