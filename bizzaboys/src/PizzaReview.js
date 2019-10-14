import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardLink } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import axios from "axios";
import Rating from 'react-rating';



export default class PizzaReview extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    const queryString = require('query-string');
    let pizza = queryString.parse(this.props.location.search).pizza;
    axios.get("http://localhost:9000/reviews/getAllForPizza", { pizza: pizza})
      .then(res => {
        let data = res.data;
        data  = data.filter(x => x.pizza === pizza)
        this.setState({ data });
      })
  }
  render() {
  return (
    <div className="Portal">
      {this.state.data.length > 0 ? this.state.data.map(el =>
        <Card className="inventoryCard" key={ el.pizza }>
          <CardBody>
            <CardTitle>{ el.pizza }</CardTitle>
            <br/>
            <CardSubtitle><Rating initialRating={ el.rating } readonly/></CardSubtitle>
            <br/>
            { el.description }
          </CardBody>
        </Card>
      ) : <h2>No reviews</h2>}
    </div>
  );
      }
}
