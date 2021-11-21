import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


function Contact() {
    return (

        <Container>
            <Row>
                <h2>Submit your details</h2>
                <Col className="md">
                    <Form>
                        <Container className="form-container">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" />
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Label htmlFor="basic-url">Website</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    https://
                            </InputGroup.Text>
                                <FormControl id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                            </Form.Group>
                            <Button variant="dark-gray" type="submit">
                                Submit
                            </Button>
                        </Container>
                    </Form>
                </Col>
                <Col className="md contact-info">
                    <i class="fas fa-envelope fa-2x"><h3>hello@yay.com</h3></i>
                    <i class="fas fa-phone fa-2x"><h3>1234567890</h3></i>
                    <i class="fas fa-map-marker-alt fa-2x"><h3>123 Some Street Somewhere Some City 10000</h3></i>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
