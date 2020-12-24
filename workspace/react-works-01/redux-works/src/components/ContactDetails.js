import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContactById } from '../actions/contacts-actions';


class ContactDetails extends Component {
    componentDidMount() {
        let { id } = this.props.match.params
        this.props.getContact(id);
    }

    componentDidCatch() {
        // your exeptions can go here 
    }

    render() {
        console.log(this);
        let { contact } = this.props;
        if (!contact) contact = {}

        return (
            <div className="container">
                <h3>Details Of The Contact: {this.props.match.params.id} </h3>
                <div className="row">
                    <div className="col-md-4">

                        <img src={contact.picture} alt={contact.name} style={{ height: 200, width: 200 }}
                            className="img img-thumbnail" />

                    </div>
                    <div className="col-md-8">
                        <table className="table table-bordered">
                            <tr>
                                <td>Name</td>
                                <td>
                                    {contact.name}
                                </td>
                            </tr>
                            <tr>
                                <td>Email </td>
                                <td>{contact.email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{contact.phone}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const stateAsProps = (reducers) => (
    {
        contact: reducers.contactsReducer.contact
    }
)

const actionAsProps = {
    getContact: getContactById
}

export default connect(stateAsProps, actionAsProps)(ContactDetails);
