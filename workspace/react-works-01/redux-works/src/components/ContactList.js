import React, { Component } from 'react';
import ContactCard from './ContactCard';
import {connect} from 'react-redux';
import {fetchContacts} from '../actions/contacts-actions'

class ContactList extends Component {
 
    // all end points to be invoked from here 
    // and it implicitly calls render function 
    componentDidMount() {
        this.props.getAllContact(); 
    }

    render() {
        let list = null;
        let { contacts } = this.props;
        console.log(contacts);
        if (contacts instanceof Array && contacts.length > 0) {
            list = contacts.map(c => <ContactCard contact={c} key={c.id} />)
        }

        return (
            <div>
                {list}
            </div>
        );
    }
}

// contactsReducer -> contactsReducer

const stateAsProps = (reducers) => {
    return {
        contacts: reducers.contactsReducer.contacts 
    }
}

const actionAsProps ={
    getAllContact: fetchContacts 
}

export default connect(stateAsProps, actionAsProps ) (ContactList);