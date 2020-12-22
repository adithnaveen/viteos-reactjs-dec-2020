import React from 'react'
import ContactCardJson from './ContactCardJson'; 

const ContactListJSON =({contacts}) => (
    <div>
        {contacts.map(c => <ContactCardJson contact={c} key={c.id} /> )}
    </div>
)

export default ContactListJSON; 