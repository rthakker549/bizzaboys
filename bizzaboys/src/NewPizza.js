import React from 'react';
import { Form, FormInput, FormTextarea } from "shards-react";
import { Button } from "shards-react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';


class Order extends React.Component {

  state = {
    redirect: false
  }

  setRedirect = (event) => {
    const elements = event.target.elements;
    const update = {
      pizzaName: elements.name.value,
      inventory: elements.add.value
    }
    // axios.post(`http://localhost:9000/orders/order?firstname=${newOrder.firstName}&lastname=${newOrder.lastName}` +
    // `&phoneNumber=${newOrder.phoneNumber}&pizza=${newOrder.pizza}&building=${newOrder.building}&room=${newOrder.room}`).then(function (response) {
    //   console.log(response);
    // }).catch(function (error) {
    //   console.log(error.response);
    // })
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/inventory' />
    }
  }

  render() {
    return (
      <div className="NewPizza">
        {this.renderRedirect()}
        <h1>Add a New Pizza</h1>
        <div className="orderForm">
          <Form onSubmit={this.setRedirect}>
            <label htmlFor="name">Pizza Name</label>
            <FormInput id="name" placeholder="Pizza"/>
            <label htmlFor="imageurl">Image URL</label>
            <FormInput id="imageurl" placeholder="Image"/>
            <label htmlFor="description">Description</label>
            <FormTextarea type="textarea" id="description" placeholder="Describe the pizza."/>
            <label htmlFor="price">Price</label>
            <FormInput id="price" placeholder="$$$" type="number" step="0.01"/>
            <label htmlFor="inventory">Initial Inventory</label>
            <FormInput id="inventory" placeholder="Initial Inventory" type="number"/>
            <br/>
            <Button outline type="submit">Submit Order</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Order;
