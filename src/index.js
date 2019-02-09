import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'

import { BrowserRouter, Router, Route } from 'react-router-dom'
import { firebaseApp } from "./firebase";
import history from './history';

import './index.css';
import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import * as serviceWorker from './serviceWorker';
import { logUser } from './actions';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
   if(user) {
       history.push('/app');
       store.dispatch(logUser(user.email));
   } else {
       history.push('/signup');
   }
});

ReactDOM.render( <Provider store={store}>
                    <BrowserRouter path={''}>
                        <Router history={history}>
                            <div>
                                <Route path={'/app'} component={App}/>
                                <Route path={'/signin'} component={SignIn}/>
                                <Route path={'/signup'} component={SignUp}/>
                            </div>
                        </Router>
                    </BrowserRouter>
                </Provider>, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
