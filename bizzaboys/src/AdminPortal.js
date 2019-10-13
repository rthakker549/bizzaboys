import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardLink } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

class AdminPortal extends React.Component {

  render() {
    return (
      <div className="Portal">
        <Card className="adminCard" id="inventory">
          <CardBody>
            <CardTitle href='/inventory'>Inventory</CardTitle>
            <CardSubtitle>Current Inventory</CardSubtitle>
            <CardLink href='/inventory'> View current inventory here.</CardLink>
          </CardBody>
        </Card>

        <Card className="adminCard" id="orders">
          <CardBody>
            <CardTitle>Orders</CardTitle>
            <CardSubtitle>Past orders</CardSubtitle>
            <CardLink href='/orderslist'> View all previous orders here.</CardLink>
          </CardBody>
        </Card>

        <Card className="adminCard" id="newpizza">
          <CardBody>
            <CardTitle>New Pizza</CardTitle>
            <CardSubtitle>Add a new pizza.</CardSubtitle>
            <CardLink href='/new'> Create a new pizza and add it to inventory here.</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AdminPortal;
