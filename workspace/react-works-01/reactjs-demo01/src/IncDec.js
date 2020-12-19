import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'


class IncDec extends Component {
    state = { num:0 }

    increment =() => this.setState({num: this.state.num +1})
    decrement =() => this.setState({num: this.state.num -1})
   
    incrementOrDecrement = (val)  => this.setState({num: this.state.num + val})
   

    render() {
        // dont call setState inside render, as it create infinite loop 
       //  this.setState({num: this.state.num+1});

        return (
            <div className="container">
                <h2 className="alert alert-info">ReactJS Counter Application</h2>
                <h3>Value of Number {this.state.num} </h3>
                <button className="btn btn-primary" onClick={this.increment}>Increment</button>
                <button className="btn btn-secondary" onClick={this.decrement}>Decrement</button>
                <hr /> 
                <button 
                    className="btn btn-primary" 
                    onClick={()
                            => {
                                    this.incrementOrDecrement(1)
                            }
                      }>Increment1 </button>

                <button 
                    className="btn btn-danger" 
                    onClick={()=> this.incrementOrDecrement(-1)}>Decrement1</button>

            </div>
        );
    }
}

export default IncDec;