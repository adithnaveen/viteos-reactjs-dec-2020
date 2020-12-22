import React from 'react'
import ContactCardJson from './ContactCardJson'; 
import loading from '../hoc/loading'; 

const ContactListHOC =({contacts}) => {
  let list=contacts.map(c => 
    <ContactCardJson contact={c} key={c.id} />); 

  return <div>
      {list}
  </div>

}

export default loading(ContactListHOC); 