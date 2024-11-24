import React from 'react';
import { ContactForm } from './ContactFrom';
import { ContactList } from './ContactList';
import {Header} from "./header";
export const App = () => (
  <div>
       <Header />
         <div className="min-h-full">
         <div className="max-w-4xl mx-auto p-2">
    <h1>Meteor Wallet</h1>
<ContactForm/>
<ContactList/>
</div>
 </div>
  </div>
);
