import React from 'react';
import { Form, FormInput, FormSelect, FormTextarea } from "shards-react";
import { Button } from "shards-react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Rating from 'react-rating';
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
        <h1>Leave a Review</h1>
        <div className="orderForm">
          <Form onSubmit={this.setRedirect}>
            <label htmlFor="rating">Rating</label>
            <Rating id="rating"/>
            <label htmlFor="description">Review</label>
            <FormTextarea type="textarea" id="review" placeholder="Leave a review."/>
            <br/>
            <Button outline type="submit">Submit Review</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Order;
