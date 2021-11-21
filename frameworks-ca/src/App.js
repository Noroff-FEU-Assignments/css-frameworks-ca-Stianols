import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './sass/style.scss';
import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Navbar bg="dark" expand="md" variant="primary">
            <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" variant="primary" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/News">News</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                <Button color="primary">Go</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/News' element={<News />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Row className="footer">
          <Col className="footer-item">
            <i class="fab fa-vimeo-v fa-2x"></i>
            <i class="fab fa-youtube fa-2x"></i>
          </Col>
          <Col className="footer-item">
            <h4>hello@yay.com</h4>
          </Col>
          <Col className="footer-item">
            <h4>Copyright 2021</h4>
          </Col>
        </Row>
      </div>
    </Router >
  )
}

export default App;
