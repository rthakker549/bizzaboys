import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

class YourRewards extends React.Component {

  getPoints = () => {
    const queryString = require('query-string');
    let phone = queryString.parse(this.props.location.search).phone;
    // GET points for phone
    return 12;
  }


  render() {
    const queryString = require('query-string');
    return (
      <div className="Portal">
      <Card className="inventoryCard">
        <CardBody>
          <CardTitle>{ queryString.parse(this.props.location.search).phone }</CardTitle>
          <br/>
          <CardSubtitle>You have { this.getPoints() } points</CardSubtitle>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default YourRewards;
