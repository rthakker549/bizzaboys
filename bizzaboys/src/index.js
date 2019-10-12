import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Order from './Order'
import Admin from './Admin'
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import TopNavbar from './components/TopNavbar';


const routing  = (
    <Router>
        <div>
          <TopNavbar/>
          <Route exact path="/" component={App}/>
          <Route path="/order" component={Order}/>
          <Route path="/admin" component={Admin}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
