//Import axios library to make ajax request
import axios from 'axios';
import {FETCH_USER} from './types';

//after refactor
//IF we have 1 expression, we can remove Curly Brace + Return Keyword
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({type: FETCH_USER, payload: res.data});
};
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token)
    dispatch({type: FETCH_USER, payload: res.data});
};

        //REMOVE for refactor{
     //dispatch IS a function,
    //We will ONLY return an action AFTER axios.get if finished
    //remove the return keyword . Single Argument, we do NOT need ()
        //Make GET request to back end and pass in the Route to our API
    //router/authRoutes.js app.get'/api/current_user'
    //Axios returns a promise
   
   // REMOVE for refactor }




/* BEFORE the Refactor
// define action creator. We will declare action types in types.js
export const fetchUser = () => {
    //dispatch IS a function,
    //We will ONLY return an action AFTER axios.get if finished
    return function(dispatch){
    //Make GET request to back end and pass in the Route to our API
    //router/authRoutes.js app.get'/api/current_user'
    //Axios returns a promise
    axios
    .get('/api/current_user')
    .then(res => dispatch({type: FETCH_USER, payload: res}));
    }
};

*/