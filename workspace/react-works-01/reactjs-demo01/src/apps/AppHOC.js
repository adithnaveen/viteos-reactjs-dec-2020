import React, { Component } from 'react'
import ContactListHOC from '../components/ContactListHOC'


class AppHOC extends Component {
    state = { 
        contacts: [] 
     }

    async componentDidMount(){
        let resp = await fetch("http://localhost:4000/contacts"); 
        let contacts = await resp.json(); 
        this.setState({contacts:contacts}); 
     }

    render() {
        return (
            <div>
                <h1 className="text-center">Higher Order Component-Demo</h1>
                <hr /> 

                <div className="row">
                    <div className="col">
                        <ContactListHOC contacts={this.state.contacts} />
                    </div>
                    <div className="col">
                        Product Component Goes Here 
                    </div>
                </div>
            </div>
        ); 
    }
}

export default AppHOC;