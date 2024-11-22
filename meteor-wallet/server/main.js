import { Meteor } from 'meteor/meteor';
import '../imports/api/ContactsCollections';
import '../imports/api/ContactsMethods'; // Ensure this is imported
import { async } from '@babel/runtime/regenerator';

Meteor.startup(async() => {
  // Any startup logic
});
