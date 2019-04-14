import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top">
        <Navbar.Brand className="logo" href="#">
          Stephanie Coy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about" className="nav-links">About</Nav.Link>
            <Nav.Link href="#work" className="nav-links">Work</Nav.Link>
            <Nav.Link href="https://medium.com/@stephanie.a.coy" className="nav-links">Blog</Nav.Link>
            <Nav.Link href="#contact" className="nav-links">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
