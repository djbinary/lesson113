// / If a given file is exploring a class or a react component 
// of  any type be it a functional component or class component
//  We will label it with a capital letter but 
// if the file returns just a function or just a series of functions lower case

//import react component based class too
import React , { Component } from 'react';

//reactor outer helper's specifically themed around allowing you 
//to navigate around the dorm or at least. Exports two helpers {helper 1, helper2}
import {BrowserRouter, Route} from 'react-router-dom';
// BrowserRouter object is the brain and logic of react

//Dummpy component
import Header from './Header';

import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';


const  Dashboard = () => <h2>Dashboard</h2>
const  SurveyNew = () => <h2>SurveyNew</h2>


//const App = () => {
class App extends Component {
    // bring the connect helper in, to call action creators
    //Connect App component to react store


    componentDidMount(){
        this.props.fetchUser();

    }
    render() {
    return (
        <div>
            <BrowserRouter>
            {/*The BrowserRouter can ONLY have
            ONE child 
            Here we can set the ROUTES e.g. URL user
            will visit and what to display
            without exact={true} OR just put exact. JUST the 
            property name, will return the TRUE value
             react will display ALL content in the URL*/}
            <div className = "container">
                <Header />
                <Route exact path='/' component={Landing} />
                <Route exact path='/surveys' component={Dashboard} />
                <Route exact path='/surveys/new' component={SurveyNew} />

           


            </div>
            </BrowserRouter>
        </div>
             );
            }
}

//once connect is called, ther actions are assigned to App as props
export default connect(null, actions)(App);
