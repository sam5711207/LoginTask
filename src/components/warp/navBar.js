import React from 'react';

import './warp.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { useSelector } from 'react-redux';

export default function NavBar() {

  const isUserRegister = useSelector(state => state.registerReducer.isUserRegister);
  const user = useSelector(state => state.registerReducer.userDetails);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container style={{ display: "grid", gridTemplateColumns: "33% 33% 33%" }}>
          <Navbar.Brand className="navBar_img_logo btn"
            href={isUserRegister === false ? "/login" : ""}
            style={{ width: "40%", height: "100%" }
            }>
          </Navbar.Brand>
          <Navbar.Brand style={{ textAlign: "center" }}>Wine-Online</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link className="nav_user" style={{ textAlign: "right" }} disabled>Hello</Nav.Link>
            <Nav.Link className="nav_user" style={{ textAlign: "right" }} disabled>
              {user ? user.firstName ? user.firstName + " " + user.lastName : "" : ""}</Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
