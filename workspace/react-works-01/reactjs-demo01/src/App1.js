import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
// import ProductForm from './components/ProductForm';
import ProductFormCtrl from './components/ProductFormCtrl';
class App1 extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="alert alert-info">Using (Controlled Compnent)</h1>
                <div className="row">
                    <div className="col">
                        <ProductFormCtrl />
                    </div>
                </div>
            </div>
        );
    }
}

export default App1;