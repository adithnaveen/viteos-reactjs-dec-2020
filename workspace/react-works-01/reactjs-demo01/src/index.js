import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


// import App1 from './App1';

// import LifeCycle from './LifeCycle';

// import ContactsAppArray from './components/ContactsAppArray'; 

// to invoke the data from end point 
// import AppJSON from './apps/AppJSON'; 

// working with HOC 
// import AppHOC from './apps/AppHOC'


import VirtualDom from './apps/VirtualDom';

ReactDOM.render(<VirtualDom/>, document.getElementById('root'));


// to show working of DOM 

// let h1 = document.createElement("h1"); 
// h1.setAttribute("id", "heading1"); 
// h1.innerHTML = "Welcome To ReactJS Virtual Dom"; 
// document.getElementById("root").append(h1); 

// let count = 1; 
// setInterval(() => {
//     let h1 = document.getElementById("heading1"); 
//     h1.innerHTML = "Welcome To ReactJS Virtual Dom"; 
//     console.log("Updating Heading :" , (count ++));
// }, 1000); 