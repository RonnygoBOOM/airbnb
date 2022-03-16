import React from 'react';
import { Container, Col, Row } from 'reactstrap'

function Hero() {
    return (
    <>
        <Container>
            <Row>
                <Col >
                    <img className="center" alt="airbnb array" src="photo-array.png"></img>
                </Col>
            </Row>
            <Row>
                <Col lg={{size: 8, offset: 2}}>
                    <h1 className="center-h1">Online Experiences</h1>
                    <h5 className="center-h5">Join unique interactive activities led by one-of-a-kind-hosts-all without leaving home.</h5>
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default Hero;