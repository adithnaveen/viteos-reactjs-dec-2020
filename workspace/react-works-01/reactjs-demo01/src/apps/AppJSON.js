import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import ContactListJSON from '../components/ContactListJSON'

class AppJSON extends Component {
    state = { 
        contacts:[]
     }

     // fetch, axios, jQuery 
    componentDidMount() {
        fetch("http://localhost:4000/contacts")
            .then(resp => resp.json()) 
            // .then(data => console.log(data))
            .then(data => this.setState({contacts:data})); 
    }
 
    render() {
        return (

            <div>
                {/* <h2>Number of Contacts : {this.state.contacts.length} </h2> */}
                <h1 className="alert alert-info">Using AJAX for getting Data from Rest End point</h1>

                <div className="row">
                        <div className="col">
                            <ContactListJSON contacts={this.state.contacts} />
                        </div>
 
                        <div className="col">
                        </div>
                </div>


            </div>
            
        );
    }
}

export default AppJSON;