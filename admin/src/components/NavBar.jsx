import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar>
        <Container>
          <Navbar.Brand href="/">Quiptionary Admin</Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/definitions/list">List Definitions</Nav.Link>
              <Nav.Link href="/definitions/create">Create Definition</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )

}

export default NavBar