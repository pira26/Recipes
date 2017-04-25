import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


const NavBar = () => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">React-Bootstrap</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
            <NavLink to="/home">Home</NavLink>
          </NavItem>
          <NavItem eventKey={2}>
            <NavLink to="/submit">Submit a Recipe</NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavBar;