import React from 'react';
export const ContactForm = () =>{
    const [name, setName]=useState();
    const [email, Email]=useState();
    const [imageUrl, setimageUrl]=useState();
        const saveContact =() =>{

    }
    return(
    <form> 
      <div>
      <label htmlfor="name">
        Name
      </label>
      <input
  id="name"
  onChange={(e) => setName(e.target.value)}
  type="text"/>
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
        <button type="button" onClick={saveContact}>save contact</button>
      </div>
    </form>)
}