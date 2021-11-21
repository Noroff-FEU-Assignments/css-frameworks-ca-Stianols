import React from 'react';
import Tab from 'react-bootstrap/form';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';

function TabsHome() {
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
                <Container className="d-flex">
                    <img
                        className="d-block w-10 sm"
                        src="/images/tab/tab-1.jpg"
                        alt="Second slide"
                    />
                    <p className="d-block">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                </Container>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Container className="d-flex">
                    <img
                        className="d-block w-10"
                        src="/images/tab/tab-2.jpg"
                        alt="Second slide"
                    />
                    <p className="d-block">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                </Container>
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <Container className="d-flex">
                    <img
                        className="d-block w-10"
                        src="/images/tab/tab-3.jpg"
                        alt="Second slide"
                    />
                    <p className="d-block">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                </Container>
            </Tab>
        </Tabs>
    )
}

export default TabsHome
