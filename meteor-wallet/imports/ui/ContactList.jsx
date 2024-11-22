import React from "react";
import { ContactsCollection } from "../api/ContactsCollections";
export const ContactList = () => {
    const contacts= ContactsCollection.find({}).fetch(); //Tracker is a tracking system in meteor
    return(
<>
<h3>Contact List</h3>
{contacts.map(contact=>(
    <li>{contact.name} - {contact.email} </li>
))}
<ul>
    <li>Nouran Hassan - Nouran@gmail.com</li>
    <li>Nouran Hassan - Nouran2@gmail.com</li>
    <li>Nouran Hassan - Nouran3@gmail.com</li>
</ul>
</>
    )
}