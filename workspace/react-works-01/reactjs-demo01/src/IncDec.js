import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'


const Btn = ({caption, handler}) => (
    <button className="btn btn-primary" onClick={handler}>
            {caption}
    </button>) 


// const mydiv = ({someparams}) => {
//         <Btn caption={someparams.caption} onClick={someparams.handler} /> 
// }

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
                    onClick={()=> {this.incrementOrDecrement(1)}
                      }>Increment1 </button>

                <button 
                    className="btn btn-danger" 
                    onClick={()=> this.incrementOrDecrement(-1)}>Decrement1</button>

                <hr /> 
                <h2>Stateless Button..</h2>
                <Btn caption="Increment" handler={()=> this.incrementOrDecrement(1)} /> 
                <Btn caption="Decrement" handler={()=> this.incrementOrDecrement(-1)} /> 

            </div>
        );
    }
}

export default IncDec;