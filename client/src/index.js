// for a CSS file we do NOT need the variable, and relative path if in NPM module
import  'materialize-css/dist/css/materialize.min.css';
//boiler plate
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//redux Store:
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
//Hookup to react side of application:
ReactDOM.render(
    //provider tag is a react component that knows how to read changes
    //from our redux store, anytime redux store gets new state produced
    //inside of it, provider will inform all children components, (Everything thatr
    // App renders, that new state is available, and update all the new
    // components with new state.)
<Provider store={store}><App /></Provider>, 
document.querySelector('#root')
);
