import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import {createStore} from 'redux';

const initialState = ['Saad', 'Arun'];

// reducer takes the state and returns updated state 

const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NAME" : 
            return [...state , action.data ]
        case "DELETE_NAME": 
            let names = [...state]; 
            names.splice(action.data, 1); 
            return names; 
        default : 
            return state; 
    }
}

const store = createStore(reducer); 
window['store'] = store; 


 const submitHandler =(evt) => {
     evt.preventDefault(); 
     const name = document.getElementById("name").value; 
     const action ={type:'ADD_NAME', data: name}
     store.dispatch(action); 
     document.getElementById("name").value = ''; 
     document.getElementById("name").focus(); 
 }

 const updatedList = () => {
     let names = store.getState(); 
     let list = names.map((cname, index) =>  '<li class="list-group-item"><button  class="btn btn-danger" onclick="deleteName('+index+')">x</button>'+
     cname
     +'</li>')

     let listOfNames = list.join(''); 
     document.getElementById("namesList").innerHTML = listOfNames; 
 }
 
 store.subscribe(updatedList); 
 
 setTimeout(() => {
     document.getElementById('myform').onsubmit = submitHandler; 
     updatedList(); 
 }, 1000);  


 window['deleteName'] = (index) =>  {
     const action = {type:"DELETE_NAME", data :  index}; 
     store.dispatch(action); 
 }