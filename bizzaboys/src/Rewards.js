import React from 'react';
import { Form, FormInput } from "shards-react";
import { Button } from "shards-react";
import { Redirect } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';

class Rewards extends React.Component {

  state = {
    redirect: false,
    phone: ''
  }

  setRedirect = (event) => {
    //GET phoneNumber rewards
    this.state.phone = event.target.elements.phone.value;
    this.setState({
      redirect: true
    })
  }

  renderRedirect = (phone) => {
    if (this.state.redirect) {
      return <Redirect to={ "/yourrewards?phone=" + this.state.phone }/>
    }
  }


  render() {
    return (
      <div className="Admin">
        { this.renderRedirect() }
        <div className="adminForm">
          <Form onSubmit={this.setRedirect}>
            <label htmlFor="#phone">Enter Phone Number:</label>
            <FormInput id="phone" placeholder="1234567890"/>
            <br/>
            <Button outline type="submit">View Rewards</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Rewards;
