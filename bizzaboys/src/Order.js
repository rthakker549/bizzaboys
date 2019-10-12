import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "shards-react";
import { Form, FormInput, FormGroup, FormSelect } from "shards-react";
import { Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import logo from './logo.svg';
import './App.css';

function Order() {
  return (
    <div className="Order">
      <Navbar>
        <NavbarBrand>Bizza</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink active href="#">
                Order Now
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
      <div class="orderForm">
        <Form>
          <FormGroup inline>
            <label htmlFor="#firstname">First</label>
            <FormInput inline id="#firstname" placeholder="First"/>
            <label htmlFor="#lastname">Last</label>
            <FormInput inline id="#lastname" placeholder="Last"/>
          </FormGroup>
          <label htmlFor="#building">Building</label>
          <FormSelect>
            <option value="buildingOne">Kauffman</option>
            <option value="buildingTwo">Selleck</option>
            <option value="buildingThree">Parkhaus</option>
          </FormSelect>
          <label htmlFor="#room">Room Number</label>
          <FormInput id="#room" placeholder="Room Number" type="number"/>
          <label htmlFor="#pizza">What Type of Pizza?</label>
          <FormSelect>
            <option value="cheese">Cheese</option>
            <option value="pepperoni" disabled>
              Pepperoni
            </option>
            <option value="vegan">Vegan</option>
          </FormSelect>
          <Button>Submit Order</Button>
        </Form>
      </div>
    </div>
  );
}

export default Order;
