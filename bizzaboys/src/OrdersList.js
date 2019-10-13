import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardLink } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

function OrdersList() {

  function ordersList() {
    // GET orders
    let orders = [{
      firstName: "Andre",
      lastName: "Garivay",
      phoneNumber: "2183161504",
      pizza: "sausage",
      building: "parkhaus",
      room: "802"
    }, {
      firstName: "Rohan",
      lastName: "Thakker",
      phoneNumber: "4021234567",
      pizza: "cheese",
      building: "kauffman",
      room: "211"
    }]
    return orders;
  }

  return (
    <div className="Portal">
      { ordersList().map(el =>
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

export default OrdersList;
