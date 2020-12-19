import React, { Component, Fragment } from 'react'

export default class AppHeader extends Component {
    render() {

        console.log(this);
        console.log("-----------------------------------------");
        console.log(this.props);
        return (
            <Fragment>
                <h1>Company - {this.props.title}, Developed By {this.props.createdBy}</h1>
                <hr /> 
            </Fragment>
        );
    }
}

