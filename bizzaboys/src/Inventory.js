import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import axios from "axios"



export default class Inventory extends React.Component {
  state = {
    data: []
  }


  componentDidMount() {
    axios.get("http://localhost:9000/pizzas")
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }
  render() {
  return (
    <div className="Portal">
      {this.state.data.length > 0 ? this.state.data.map(el =>
        <Card className="inventoryCard" key={ el.pizzaName }>
          <CardBody>
            <CardTitle href='/inventory'>{ el.pizzaName }</CardTitle>
            <br/>
            <CardSubtitle>${ el.price }, { el.review } stars, { el.inventory } left</CardSubtitle>
            <br/>
            { el.description }
          </CardBody>
        </Card>
      ) : <h2>No pizzas</h2>}
    </div>
  );
      }
}

