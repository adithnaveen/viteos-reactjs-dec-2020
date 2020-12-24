import React, { Component } from 'react'

class ContactDetails extends Component {

    render() {
        console.log(this);
         let {id} = this.props.match.params 
        return (
            <div className="container">
                <h3>Details Of The Contact: {id}  </h3>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-8"></div>
                </div>            
            </div>
        );
    }
}

export default ContactDetails;
