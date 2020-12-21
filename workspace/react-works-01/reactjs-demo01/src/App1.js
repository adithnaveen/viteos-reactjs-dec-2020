import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import ProductForm from './components/ProductForm';

class App1 extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="alert alert-info">Using Refs (Uncontrolled Compnent)</h1>
                <div className="row">
                    <div className="col">
                        <ProductForm />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        );
    }
}

export default App1;