import React, { Component } from 'react'


class ProductForm extends Component {

    addNewProduct = (event) => {
        console.log("Form Called for submit... ");
        const name = this.refs.name.value;
        const price = this.refs.price.value
        const desc = this.refs.desc.value
        const make = this.refs.make.value;

        const product = { name, price, desc, make };
        console.log(product);

        this.refs.name.value = '';
        this.refs.price.value = '';
        this.refs.desc.value = '';
        this.refs.make.value = '';

        event.preventDefault();
    }


    render() {
        return (
            <div className="container">
                <h3>Product Entry Form</h3>
                <form className="form" onSubmit={this.addNewProduct}>
                    <div className="form-group row">
                        <label className="control-label col-md-4">Product Name</label>
                        <div className="col-md-8">
                            <input ref="name" type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="control-label col-md-4">Product Price</label>
                        <div className="col-md-8">
                            <input ref="price" type="text" className="form-control" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="control-label col-md-4">Product Description</label>
                        <div className="col-md-8">
                            <input ref="desc" type="text" className="form-control" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="control-label col-md-4">Product Make</label>
                        <div className="col-md-8">
                            <input ref="make" type="text" className="form-control" />
                        </div>
                    </div>


                    <button className="btn btn-primary">Save Product</button>

                </form>


            </div>
        );
    }
}

export default ProductForm;