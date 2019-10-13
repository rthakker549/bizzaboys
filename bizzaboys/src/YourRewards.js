import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import axios from "axios"

class YourRewards extends React.Component {

  state = {
    points: 0
  }

  componentDidMount() {
    const queryString = require('query-string');
    let phone = queryString.parse(this.props.location.search).phone;
    axios.get("http://localhost:9000/orders/points")
      .then(res => {
        let points = res.data;
        let myPoints = points.filter(x => x.phoneNumber === phone)
        if(myPoints.length > 0) {
        points = myPoints[0].points;
        this.setState({points});
      } 
      })
  }

  render() {
    const queryString = require('query-string');
    return (
      <div className="Portal">
      <Card className="inventoryCard">
        <CardBody>
          <CardTitle>{ queryString.parse(this.props.location.search).phone }</CardTitle>
          <br/>
          <CardSubtitle>You have { this.state.points } points</CardSubtitle>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default YourRewards;
