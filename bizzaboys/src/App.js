import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavbarBrand href="#">Bizza</NavbarBrand>
        <Nav>
        <NavItem>
              <NavLink active href="#">
                Order Now
              </NavLink>
            </NavItem>
            </Nav>
      </Navbar>
      <header className="App-header">
        <p>
          bizza.xyz coming soon
        </p>
      </header>
    </div>
  );
}

export default App;
