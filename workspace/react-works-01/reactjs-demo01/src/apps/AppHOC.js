import React, { Component } from 'react'
import ContactListHOC from '../components/ContactListHOC'
import ProductListHOC from '../components/ProductListHOC'

class AppHOC extends Component {
    state = { 
        contacts: [] , 
        products: []
     }

    async componentDidMount(){
        let resp = await fetch("http://localhost:4000/contacts"); 
        let contacts = await resp.json(); 
        this.setState({contacts:contacts}); 

        resp = await fetch("http://localhost:4000/products"); 
        let products = await resp.json(); 
        this.setState({products:products}); 
     }

    render() {
        return (
            <div>
                <h1 className="text-center">Higher Order Component-Demo</h1>
                <hr /> 

                <div className="row">
                    <div className="col">
                        <ContactListHOC contacts={this.state.contacts} />
                    </div>
                    <div className="col">
                       <ProductListHOC products ={this.state.products} />
                    </div>
                </div>
            </div>
        ); 
    }
}

export default AppHOC;