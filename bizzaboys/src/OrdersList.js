import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import axios from "axios";

class OrdersList extends React.Component {

  state = {
    data: []
  }


  componentDidMount() {
    axios.get("http://localhost:9000/orders")
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  render () {
    return (
      <div className="Portal">
        { this.state.data.map(el =>
          <Card className="inventoryCard" key={ el.phoneNumber }>
            <CardBody>
              <CardTitle href='/inventory'>{ el.firstName } { el.lastName }</CardTitle>
              <br/>
              <CardSubtitle>{ el.phoneNumber }</CardSubtitle>
              <br/>
              { el.pizza } delivered to { el.building } room { el.room }.
            </CardBody>
          </Card>
        )}
      </div>
    );
  }
}

export default OrdersList;
