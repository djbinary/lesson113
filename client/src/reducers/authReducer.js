import { FETCH_USER } from '../actions/types';

// state = null, meaning we have NO IDEA if the user is logged in
// or not, so we will asume not. This is important to make sure
// we display the correct Header / Content to appropriate use
// E.g. if user IS LOGED IN, we DONT want to display LOGIN Link, THEN 
// when find out it IS logged in, switch it back to Sign Out
export default function(state = null, action) {
   // console.log(action);

    switch (action.type) {
//anytime user is fetched, we update the payload
        case FETCH_USER:
        // action.payload is the user model
        // when user NOT logged in, payload = ""
        // return Value FALSE when emplty string
        //IF not empty , it returns User detail.
        return action.payload || false  ;
        default:
        return state;
    }
}



