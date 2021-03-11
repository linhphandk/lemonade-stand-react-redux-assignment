import React, {FC} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation: FC = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to='/'>Home</Link>
        <Link to='/recipes'>Recipes</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
