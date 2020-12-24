import React, { Component } from 'react'
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'


import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/root-reducer'

// 1. HashRouter 
// 2. BrowserRouter 

import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';
import { Provider, ReactReduxContext } from 'react-redux'

import thunk from 'redux-thunk';

// working with Single Page Application 
const store = createStore(rootReducer, applyMiddleware(thunk));

const Home = (prop) => (
    <div>
        <h3>Welcome To Contact Book Application</h3>
        <hr />
    </div>
)
const NotFound = (prop) => (
    <div>
        <h3>NO DATA FOUND </h3>
        <hr />
    </div>
)

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <h2 className="alert alert-info">React Redux Application</h2>
                        <div className="row">
                            <div className="col-md-5">

                                <ul className="list-group">
                                    <li className="list-group-item"><Link to="/">HOME</Link> </li>
                                    <li className="list-group-item"><Link to="/add-new-contact">ADD CONTACT</Link> </li>
                                    <li className="list-group-item"><Link to="/view-contact">VIEW CONTACT</Link> </li>
                                </ul>

                            </div>
                            <div className="col-md-7">
                                <Switch>
                                    <Route path="/" exact={true} component={Home} />
                                    <Route path="/add-new-contact" exact={true} component={ContactForm} />
                                    <Route path="/view-contact" exact component={ContactList} />
                                    <Route path="/not-found" exact={true} component={NotFound} />
                                    
                                    {/* if you want optional param then suffix with ?  */}

                                    <Route path="/contact-details/:id" component={ContactDetails} exact={true} /> 
                                    <Redirect path="*" render={() =>
                                        <Redirect to="/not-found" />
                                    } to="/not-found" />
                                </Switch>
                            </div>

                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById("root")); 
