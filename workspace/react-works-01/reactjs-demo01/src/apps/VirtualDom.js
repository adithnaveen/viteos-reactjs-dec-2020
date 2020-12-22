import React, { Component } from 'react'

const SubHeading =() => (
    <h3>Sub Heading</h3>
); 

class VirtualDom extends Component {
    state ={title:"Hello World"}

    count = 1; 

    componentDidMount() {
        setInterval( () => {

            let {title} =this.state; 

            if(this.count %5===0) {
                if(title == "Hello World") {
                    title ="React JS Virtual Dom"; 
                }else {
                    title = "Hello World"; 
                }
            }
            this.setState({title: title}, () => console.log(this.count++)); 
        }, 1000)
    }

    render() {
        return  (
            <div>
                <h2>{this.state.title} </h2>
                <SubHeading /> 
             </div>
             ) 
    }


}

export default VirtualDom; 
