import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


class CounterApp extends Component {
    state = { 
        count:0 
     }
     num=1; 
    constructor() {
        super(); 
        console.log("CounterApp.contructor");
    }

    render() {
        console.log("CounterApp.render() called");
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>Value of Count is {this.state.count} </p>
                <p>Value of Num is {this.num} </p>
                <button 
                    className="btn btn-secondary"
                    onClick={() =>{
                        this.setState({count: this.state.count+1})
                    }}
                >Increment</button>

                <button 
                    className="btn btn-danger"
                    onClick={() =>{
                                this.num ++; 
                                this.forceUpdate(); 
                            }}
                >Increment Num</button>

            </div>
        );
    }

    static getDerivedStateFromProps(props, state){
        console.log("CounterApp.getDerivedStateFromProps");
        return null; 
    }

    componentDidMount() {
        console.log("CounterApp.componentDidMount");
    }

    componentWillUnmount() {
        console.log("CounterApp.componentWillUnmount()");
    }

    shouldComponentUpdate(){
        console.log("CounterApp.shouldComponentUpdate() :" , this.state.count);
        return true; 
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("CounterApp.getSnapshotBeforeUpdate(), prevProps", prevProps, "prevState ", prevState);
        return null; 
    }

    componentDidUpdate(){
        console.log("CounterApp.componentDidUpdate()");
    }


}

export default CounterApp;