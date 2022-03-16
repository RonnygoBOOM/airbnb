import React from 'react';
import { Col, Row } from 'reactstrap'

function Hero() {
    return (
    <>
        <Row>
            <Col sm={{size:1, offset:1}}>
                <img className="hero" alt="hero image1" src="image1.jpg"></img>
            </Col>
            <Col sm={{size:1, offset:1}}>
                <img className="hero" alt="hero image2" src="image2.jpg"></img>
            </Col>
            <Col sm={{size:1, offset:1}}>
                <img className="hero" alt="hero image3" src="image3.jpg"></img>
            </Col>
            <Col sm={{size:1, offset:1}}>
                <img className="hero" alt="hero image4" src="image4.jpg"></img>
            </Col>
            <Col sm={{size:1, offset:1}}>
                <img className="hero" alt="hero image5" src="image5.jpg"></img>
            </Col>
            
            
            
            <img className="hero" alt="hero image6" src="image6.jpg"></img>
            <img className="hero" alt="hero image7" src="image7.jpg"></img>
            <img className="hero" alt="hero image8" src="image8.jpg"></img>
            <img className="hero" alt="hero image9" src="image9.jpg"></img>
            
        </Row>
        <Row>
            <h1 className="hero-h1">Online Experiences</h1>
            <h5 className="hero-h5">Join unique interactive activities led by one-of-a-kind-hosts-all without leaving home.</h5>
        </Row>
    </>
    );
}

export default Hero;