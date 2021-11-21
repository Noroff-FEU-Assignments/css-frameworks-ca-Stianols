import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function News() {
    return (
        <>
            <Container>
                <h2>News</h2>
                <Button className="btn-news first" variant="primary">1</Button>
                <Button className="btn-news mid" variant="white">2</Button>
                <Button className="btn-news mid" variant="white">3</Button>
                <Button className="btn-news last" variant="white">4</Button>

                <Row>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="/images/news/news-1.jpg" />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary" className="w-100">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="/images/news/news-2.jpg" />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary" className="w-100">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="/images/news/news-3.jpg" />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary" className="w-100">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="/images/news/news-4.jpg" />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary" className="w-100">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="/images/news/news-5.jpg" />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary" className="w-100">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="/images/news/news-6.jpg" />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary" className="w-100">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="/images/news/news-7.jpg" />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary" className="w-100">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="/images/news/news-8.jpg" />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                    Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary" className="w-100">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Button className="btn-news first" variant="primary">1</Button>
                <Button className="btn-news mid" variant="white">2</Button>
                <Button className="btn-news mid" variant="white">3</Button>
                <Button className="btn-news last" variant="white">4</Button>
            </Container>
        </>
    )
}

export default News
