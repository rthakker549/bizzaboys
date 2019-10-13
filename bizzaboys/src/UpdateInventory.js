import React from 'react';
import { Form, FormInput, FormSelect } from "shards-react";
import { Button } from "shards-react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';


class UpdateInventory extends React.Component {

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
      <div className="Portal">
        {this.renderRedirect()}
        <h1>Add Pizzas to Inventory</h1>
        <div className="orderForm">
          <Form onSubmit={this.setRedirect}>
            <label htmlFor="name">What Type of Pizza?</label>
            <FormSelect id="name">
              <option value="cheese">Cheese</option>
              <option value="pepperoni">Pepperoni</option>
              <option value="vegan">Vegan</option>
            </FormSelect>
            <label htmlFor="add">How Many?</label>
            <FormInput id="add" placeholder="# of pizzas added" type="number"/>
            <br/>
            <br/>
            <Button outline type="submit">Submit Order</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default UpdateInventory;
