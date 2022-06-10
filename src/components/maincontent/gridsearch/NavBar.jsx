import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import './navbar.css'

export default function NavBar(props) {

  // Add variable based choosing of algorithm



    return (
      <div className="content-nav-bar">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Algorithm Visualizer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <NavDropdown title="Algorithms" id="algorithm-dropdown">
                
                  <NavDropdown.Item>Dijkstra</NavDropdown.Item>
              </NavDropdown>
              <Button id="go-button" variant="outline-success" onClick={props.clickGo} disabled={false}>Go!</Button>
              <Button id="reset-button" variant="outline-success" onClick={props.clickReset} disabled={false}>Reset Board</Button>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }