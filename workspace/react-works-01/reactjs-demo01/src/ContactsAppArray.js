import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ContactCard from './components/ContactCard'

class ContactsAppArray extends Component {

    render() {
        const contact = {
            "id": 101,
            "sex": "male",
            "name": "Sivan",
            "email": "sivan@viteos.com",
            "phone": "+91 88349 34839",
            "picture": "https://randomuser.me/api/portraits/men/1.jpg"
        }

        const contacts = [
            {
                "id": 101,
                "sex": "male",
                "name": "Sivan",
                "email": "sivan@viteos.com",
                "phone": "+91 88349 34839",
                "picture": "https://randomuser.me/api/portraits/men/1.jpg"
            },
            {
                "id": 102,
                "sex": "male",
                "name": "Sivan",
                "email": "sivan@viteos.com",
                "phone": "+91 88349 34839",
                "picture": "https://randomuser.me/api/portraits/men/2.jpg"
            },
            {
                "id": 103,
                "sex": "male",
                "name": "Sivan",
                "email": "sivan@viteos.com",
                "phone": "+91 88349 34839",
                "picture": "https://randomuser.me/api/portraits/men/3.jpg"
            }
        ];


        const contactCards1 = contacts.map(c => <ContactCard key={c.id} contact={c} />)
        console.log(contactCards1);

        return (
            <div className="container">
                <h1 className="alert alert-info">Working with Contacts Array</h1>
                <ContactCard contact={contact} />
                <hr />
                {contactCards1}
            </div>
        );
    }
}

export default ContactsAppArray;