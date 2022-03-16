import React from 'react';
import { Container, Col, Row } from 'reactstrap'

function Content(props) {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if (hours >= 17 && hours < 21) {
            timeOfDay = "evening"
    } else {
            timeOfDay = "night"
        }


    return (
    <>
        <Container>
            <Row>
                <Col >
                    <img className="center" alt="airbnb array" src="assets/photo-array.png"></img>
                </Col>
            </Row>
            <Row>
                <Col lg={{size: 8, offset: 2}}>
                    <h1 className="center-h1">Online Experiences</h1>
                    <h5 className="center-h5">Good {timeOfDay}! Join unique interactive activities led by one-of-a-kind-hosts-all without leaving home.</h5>
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default Content;