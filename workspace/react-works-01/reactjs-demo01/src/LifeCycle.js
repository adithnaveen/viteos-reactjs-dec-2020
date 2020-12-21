import React, { Component } from 'react'
import CounterApp from './components/CounterApp'

class LifeCycle extends Component {
    state = { showComponent:false }
    render() {
        let output = null; 
        if(this.state.showComponent===true) {
            output =<CounterApp /> 
        }
        return (
            <div className="container">
                <h2 className="alert alert-info">Component Lifecycle demo</h2>
                <button 
                    className="btn btn-primary"
                    onClick={() => {
                        this.setState({showComponent: !this.state.showComponent})
                    }}
                >Show/Hide CounterApp</button>

                {output}
            </div>
        );
    }
}

export default LifeCycle;