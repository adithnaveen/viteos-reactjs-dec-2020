import React, { Component } from 'react'
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/root-reducer'
import { Provider } from 'react-redux'

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'; 

// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk)))
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <h2 className="alert alert-info">React Redux Application</h2>
                    <div className="row">
                        <div className="col-md-5">
                            <ContactForm />
                        </div>
                        <div className="col-md-7">
                            <ContactList />
                        </div>

                    </div>
                </div>
            </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById("root")); 
