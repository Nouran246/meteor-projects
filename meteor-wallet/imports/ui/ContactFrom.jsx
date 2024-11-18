import React from 'react';
export const ContactForm = () =>{
    return(
    <form> 
      <div>
      <label htmlfor="name">
        Name
      </label>
      <input id="name" type="text"></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
      <label htmlFor="imageUrl">Image URL</label>
      <input type="text" id="imageUrl" />
      </div>
      <div>
        <button>save contact</button>
      </div>
    </form>)
}