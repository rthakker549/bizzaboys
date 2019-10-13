import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import { Button } from 'shards-react';
import { Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import axios from "axios"

class Unfulfilled extends React.Component {

  state = {
    redirect: false
  }

  setRedirect = (event) => {
    let id = event.target.id;
    console.log(event.target);
    axios.put('http://localhost:9000/orders/completed', {id:id})
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/portal' />
    }
  }

  state = {
    data: []
  }


  componentDidMount() {
    axios.get("http://localhost:9000/orders")
      .then(res => {
        let data = res.data;
        data = data.filter(x => !x.completed);
        this.setState({ data });
      })
  }


    render() {
      return (
      <div className="Portal">
        {this.renderRedirect()}
        { this.state.data.length > 0 ? this.state.data.map(el =>
          <Card className="inventoryCard" key={ el.id } id="id">
            <CardBody>
              <CardTitle href='/inventory'>{ el.firstName } { el.lastName }</CardTitle>
              <br/>
              <CardSubtitle>{ el.phoneNumber }</CardSubtitle>
              <br/>
              { el.pizza } delivered to { el.building } room { el.room }.
              <br/>
              <br/>
              <Button id={ el._id } onClick={this.setRedirect}>Mark Completed</Button>
            </CardBody>
          </Card>
        ) : <h2>All Orders Have Been Fulfilled!</h2>}
      </div>
    );}
}

export default Unfulfilled;
