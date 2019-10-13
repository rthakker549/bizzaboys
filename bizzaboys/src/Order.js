import React from 'react';
import { Form, FormInput, FormSelect } from "shards-react";
import { Button } from "shards-react";
import { Redirect } from 'react-router-dom'
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
    const newOrder = {
      firstName: elements.firstname.value,
      lastName: elements.lastname.value,
      phoneNumber: elements.phone.value,
      pizza: elements.pizza.value,
      building: elements.building.value,
      room: elements.room.value
    }
    axios.post(`http://localhost:9000/orders/order?firstname=${newOrder.firstName}&lastname=${newOrder.lastName}` +
    `&phoneNumber=${newOrder.phoneNumber}&pizza=${newOrder.pizza}&building=${newOrder.building}&room=${newOrder.room}`).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error.response);
    })
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div className="Order">
      {this.renderRedirect()}
        <div className="orderForm">
          <Form onSubmit={this.setRedirect}>
            <label htmlFor="firstname">First</label>
            <FormInput id="firstname" placeholder="First"/>
            <label htmlFor="lastname">Last</label>
            <FormInput id="lastname" placeholder="Last"/>
            <label htmlFor="phone">Phone Number</label>
            <FormInput type="tel" id="phone" placeholder="1234567890"/>
            <label htmlFor="building">Building</label>
            <FormSelect id="building">
              <option value="buildingOne">Kauffman</option>
              <option value="buildingTwo">Selleck</option>
              <option value="buildingThree">Parkhaus</option>
            </FormSelect>
            <label htmlFor="room">Room Number</label>
            <FormInput id="room" placeholder="Room Number" type="number"/>
            <label htmlFor="pizza">What Type of Pizza?</label>
            <FormSelect id="pizza">
              <option value="cheese">Cheese</option>
              <option value="pepperoni" disabled>
                Pepperoni
              </option>
              <option value="vegan">Vegan</option>
            </FormSelect>
            <br/>
            <br/>
            <Button outline type="submit">Submit Order</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Order;
