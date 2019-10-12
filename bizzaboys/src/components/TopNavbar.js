import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import logo from '../logo.svg';

function TopNavbar() {
  return (
    <Navbar>
      <NavbarBrand href="/">Bizza</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink active href="/order">
              Order Now
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/admin">
              Admin
            </NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  );
}

export default TopNavbar;
