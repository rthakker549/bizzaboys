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
    redirect: false,
    data: []
  }

  componentDidMount() {
    axios.get("http://localhost:9000/pizzas")
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  setRedirect = (event) => {
    const elements = event.target.elements;
    const update = {
      pizzaName: elements.name.value,
      inventory: elements.add.value
    }
    axios.put('http://localhost:9000/pizzas/pizzaInventory', update);
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
              { this.state.data.map(el =>
                <option value={ el.pizzaName }>{ el.pizzaName } (${ el.price })</option>
              )}
            </FormSelect>
            <br/>
            <br/>
            <label htmlFor="add">How Many?</label>
            <FormInput id="add" placeholder="# of pizzas added" type="number"/>
            <br/>
            <br/>
            <Button outline type="submit">Update Inventory</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default UpdateInventory;
