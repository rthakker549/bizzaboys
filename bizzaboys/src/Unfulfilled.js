import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import { Button } from 'shards-react';
import { Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

class Unfulfilled extends React.Component {

  state = {
    redirect: false
  }

  setRedirect = (event) => {
    let orderId = event.target.id
    // axios.post(`http://localhost:9000/orders/order?firstname=${newOrder.firstName}&lastname=${newOrder.lastName}` +
    // `&phoneNumber=${newOrder.phoneNumber}&pizza=${newOrder.pizza}&building=${newOrder.building}&room=${newOrder.room}`).then(function (response) {
    //   console.log(response);
    // }).catch(function (error) {
    //   console.log(error.response);
    // })
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/portal' />
    }
  }

  ordersList = () => {
    // GET orders (w/ id's)
    let orders = [{
      firstName: "Andre",
      lastName: "Garivay",
      phoneNumber: "2183161504",
      pizza: "sausage",
      building: "parkhaus",
      room: "802",
      completed: true,
      id: 12
    }, {
      firstName: "Rohan",
      lastName: "Thakker",
      phoneNumber: "4021234567",
      pizza: "cheese",
      building: "kauffman",
      room: "211",
      completed: false,
      id: 17
    }];
    return orders.filter(x => !x.completed);
  }


    render() {
      return (
      <div className="Portal">
        {this.renderRedirect()}
        { this.ordersList().map(el =>
          <Card className="inventoryCard" key={ el.id } id="id">
            <CardBody>
              <CardTitle href='/inventory'>{ el.firstName } { el.lastName }</CardTitle>
              <br/>
              <CardSubtitle>{ el.phoneNumber }</CardSubtitle>
              <br/>
              { el.pizza } delivered to { el.building } room { el.room }.
              <br/>
              <br/>
              <Button id={ el.id } onClick={this.setRedirect}>Mark Completed</Button>
            </CardBody>
          </Card>
        )}
      </div>
    );}
}

export default Unfulfilled;
