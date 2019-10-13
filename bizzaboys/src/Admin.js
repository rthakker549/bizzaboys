import React from 'react';
import { Form, FormInput } from "shards-react";
import { Button } from "shards-react";
import { Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';

class Admin extends React.Component {

  state = {
    redirect: false
  }

  setRedirect = (event) => {
    console.log(event.target.elements.code.value)
    if (event.target.elements.code.value === '69420') {
      this.setState({
        redirect: true
      })
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/portal' />
    }
  }

  render() {
    return (
      <div className="Admin">
        {this.renderRedirect()}
        <div className="adminForm">
          <Form onSubmit={this.setRedirect}>
            <label htmlFor="#code">Enter Admin Access Code:</label>
            <FormInput type="password" id="code" placeholder="Admin Access Code"/>
            <br/>
            <Button outline type="submit">Enter Admin Portal</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Admin;
