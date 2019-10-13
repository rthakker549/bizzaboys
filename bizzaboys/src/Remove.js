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
    console.log({ pizzaName: elements.name.value })
    axios.delete("http://locahost:9000/pizzas/deletePizza", { pizzaName: elements.name.value }).then(function (response) {
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
      return <Redirect to='/inventory' />
    }
  }

  render() {
    return (
      <div className="Portal">
        {this.renderRedirect()}
        <h1>Remove Pizzas from Inventory</h1>
        <div className="orderForm">
          <Form onSubmit={this.setRedirect}>
            <label htmlFor="name">Choose a Pizza to Meet its Fate</label>
            <br/>
            <FormSelect id="name">
            { this.state.data.map(el =>
              <option value={ el.pizzaName }>{ el.pizzaName }</option>
            )}
            </FormSelect>
            <br/>
            <br/>
            <Button outline type="submit">Rest in Power Queen</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default UpdateInventory;
