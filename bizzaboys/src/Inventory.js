import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

function Inventory() {

  function listInventory() {
    // GET inventory
    let inventory = [{
      pizzaName: "cheese",
      description: "Cheesey, gooey, delicious",
      price: 4,
      review: 5,
      inventory: 7
    }, {
      pizzaName: "pepperoni",
      description: "Papa Pepperoni",
      price: 5,
      review: 4.3,
      inventory: 11
    }]
    return inventory;
  }


  return (
    <div className="Portal">
      { listInventory().map(el =>
        <Card className="inventoryCard" key={ el.pizzaName }>
          <CardBody>
            <CardTitle href='/inventory'>{ el.pizzaName }</CardTitle>
            <br/>
            <CardSubtitle>${ el.price }, { el.review } stars, { el.inventory } left</CardSubtitle>
            <br/>
            { el.description }
          </CardBody>
        </Card>
      )}
    </div>
  );
}

export default Inventory;
