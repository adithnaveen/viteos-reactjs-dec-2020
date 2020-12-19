import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'; 
class AppClickComponent extends Component {
    constructor() {
        super(); 
        this.btnHandler = this.btnHandler.bind(this); 
    }
    btnHandler = () =>  {
        console.log("Button1 Clicked", this);
    }
    render() {
        return (
            <div className="app-content">
                <h3>This is component Area of Application</h3>
                <hr /> 
                <button 
                    className="btn btn-primary" 
                    onClick={this.btnHandler}
                >Button 1</button>
            | 
                <button 
                    className="btn btn-primary" 
                    onClick={this.btnHandler.bind(this)}
                >Button 2</button>
            </div>
        );
    }
}
export default AppClickComponent;