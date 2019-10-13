import React from 'react';
import { Form, FormSelect, FormTextarea } from "shards-react";
import { Button } from "shards-react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Rating from 'react-rating';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';


class Review extends React.Component {

  state = {
    redirect: false,
    rating: 0
  }

  handleRatingChange = (value) => {
    this.state.rating = value;
  }

  setRedirect = (event) => {
    const elements = event.target.elements;
    const update = {
      pizzaName: elements.name.value,
      rating: this.state.rating,
      review: elements.review.value
    }
    console.log(update);
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
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div className="NewPizza">
        {this.renderRedirect()}
        <h1>Leave a Review</h1>
        <div className="orderForm">
          <Form onSubmit={this.setRedirect}>
            <label htmlFor="name">Choose a Pizza to Review</label>
            <FormSelect id="name">
              <option value="cheese">Cheese</option>
              <option value="pepperoni">Pepperoni</option>
              <option value="vegan">Vegan</option>
            </FormSelect>
            <label htmlFor="rating">Rating</label>
            <br/>
            <Rating id="rating" onChange={this.handleRatingChange}/>
            <br/>
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

export default Review;
