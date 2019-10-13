import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Order from './Order';
import Admin from './Admin';
import AdminPortal from './AdminPortal';
import Inventory from './Inventory';
import OrdersList from './OrdersList';
import NewPizza from './NewPizza';
import UpdateInventory from './UpdateInventory';
import PostOrder from './PostOrder';
import Review from './Review';
import Remove from './Remove';
import Unfulfilled from './Unfulfilled';
import Rewards from './Rewards';
import YourRewards from './YourRewards';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';


const routing  = (
    <Router>
        <div>
          <TopNavbar/>
          <Route exact path="/" component={App}/>
          <Route path="/order" component={Order}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/portal" component={AdminPortal}/>
          <Route path="/inventory" component={Inventory}/>
          <Route path="/orderslist" component={OrdersList}/>
          <Route path="/new" component={NewPizza}/>
          <Route path="/updateinventory" component={UpdateInventory}/>
          <Route path="/thankyou" component={PostOrder}/>
          <Route path="/review" component={Review}/>
          <Route path="/pizzas" component={Inventory}/>
          <Route path="/remove" component={Remove}/>
          <Route path="/unfulfilled" component={Unfulfilled}/>
          <Route path="/rewards" component={Rewards}/>
          <Route path="/yourrewards" component={YourRewards}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
