import React, { Component } from 'react'


class ProductFormCtrl extends Component {

    state ={
        pname:"", 
        price:"", 
        desc:"", 
        make:"", 
        formErrors : {
            pname:"Product Name Required", 
            price : "Product Price Required", 
            desc:"Product Description Required", 
            make:"Product Make Required"
        }, 
        errorMessages:null
    }

    // helder function 
    validateForm = (formErrors) => {
        let valid = true; 
        Object.values(formErrors).forEach(err => valid = valid && err.length ===0)
        return valid; 
    }

    addNewProduct=(event)  => {
        console.log("Product Submitted.. ");
        event.preventDefault(); 

        // check if there are any errors 
        let {formErrors} = this.state; 

        if(this.validateForm(formErrors)) {
            alert("Form Submitted"); 
        }else {
            let errorMessages = Object.values(formErrors).map((err, index) => err.length===0 ?null :
                 <li key={index}>{err}</li>)
            this.setState({errorMessages})
        }
    }

    tfHander =(evt) =>  {
        // this.setState({[evt.target.name]:evt.target.value})
        let {name, value}= evt.target; 
        let {formErrors}=this.state; 
        
        switch(name) {
            case 'pname':
                if(!value || value.length ===0) {
                    formErrors.pname="Product Name Required"
                }
                else if(value.length < 3 || value.length > 20) {
                    formErrors.pname = "Product must be between 3 to 20 chars "
                }
                else {
                    formErrors.pname =''; 
                }
                break; 
            case 'price': 
                if(!value || value.length ===0) {
                    formErrors.price= "Product Price Required"
                }
                else if(!value.match(/^\d{3,5}$/)){
                    formErrors.price = "Price Not In Valid Range"
                }
                else {
                    formErrors.price =''; 
                }
                break; 
            case 'desc': 
            if(!value || value.length ===0) {
                formErrors.desc="Product Description Required"
            }
            else if(value.length < 3 || value.length > 20) {
                formErrors.desc = "Product description must be between 3 to 20 chars "
            }
            else {
                formErrors.desc =''; 
            }
                break; 
            case 'make': 
            if(!value || value.length ===0) {
                formErrors.make="Product Make Required"
            }
            else if(value.length < 3 || value.length > 20) {
                formErrors.make = "Product Make must be between 3 to 20 chars "
            }
            else {
                formErrors.make =''; 
            }
                break; 

            default: 
                break; 
        }

            this.setState({[name]:value, formErrors})

    }


    render() {
        return (
            <div className="container">
               
               <div className="row">
                    <div className="col">

                    <h3>Product Entry Form</h3>
                <form className="form" onSubmit={this.addNewProduct}>


                    <div className="form-group row">
                        <label className="control-label col-md-4">Product Name</label>
                        <div className="col-md-8">
                            <input
                                 value={this.state.pname}
                                 name="pname" 
                                 type="text" 
                                 onChange={this.tfHander} 
                                 className="form-control" />
                        </div>
                    </div>
                    

                    <div className="form-group row">
                        <label className="control-label col-md-4">Product Price</label>
                        <div className="col-md-8">
                            <input
                            value={this.state.price}
                             name="price" type="text"  onChange={this.tfHander} className="form-control" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="control-label col-md-4">Product Description</label>
                        <div className="col-md-8">
                            <input
                            value={this.state.desc}
                             name="desc" type="text"  onChange={this.tfHander} className="form-control" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="control-label col-md-4">Product Make</label>
                        <div className="col-md-8">
                            <input
                             value={this.state.make}
                             name="make" type="text"  onChange={this.tfHander} className="form-control" />
                        </div>
                    </div>


                    <button className="btn btn-primary">Save Product</button>
                    <hr /> 
                    <ul> 
                    {this.state.errorMessages}
                    </ul>
                </form>


                    </div>
                    <div className="col">
                        <h3>Current State </h3>
                        <pre>{JSON.stringify(this.state, null, 3)}</pre>
                    </div>
               </div>

            </div>
        );
    }
}

export default ProductFormCtrl;