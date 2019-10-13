import React from 'react';
import { Form, FormInput } from "shards-react";
import { Button } from "shards-react";
import { Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';

class PostOrder extends React.Component {

  state = {
    redirect: false
  }

  setRedirect = (event) => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/review' />
    }
  }

  render() {
    return (
      <div className="PostOrder">
        <h1>Thank You! Your order is being prepared.</h1>
        {this.renderRedirect()}
        <br/>
        <Button type="button" onClick={this.setRedirect}>Leave a Review</Button>
      </div>
    );
  }
}

export default PostOrder;
