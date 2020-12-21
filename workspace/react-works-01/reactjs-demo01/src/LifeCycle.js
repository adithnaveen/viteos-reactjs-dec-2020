import React, { Component } from 'react'
import CounterApp from './components/CounterApp'

class LifeCycle extends Component {
    state = { showComponent:false, title:"Counter App v1.0" }
    render() {
        let output = null; 
        if(this.state.showComponent===true) {
            output =<CounterApp title={this.state.title} /> 
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
               <button 
                    className="btn btn-secondary"
                    onClick={() => {
                       if(this.state.title==="Counter App v1.0") {
                           this.setState({title:"Counter App v2.0"})
                       }else {
                           this.setState({title:"Counter App v1.0"})
                       }
                    }}
                >Toggle</button>



                {output}
            </div>
        );
    }
}

export default LifeCycle;