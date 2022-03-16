import React from 'react';
import { Card, CardBody, CardText, CardImg, Container, Row, Col } from 'reactstrap';

function Cards() {
    return (
    <>
        <Card>
            <Container>
                <Row>
                    <Col sm={{size:3}}>
                        <CardBody>
                            <CardImg src="KatieZaferes.png" alt="Katie Zaferes"></CardImg>
                            <CardText>
                                <img src="star.png" alt="star"></img>
                                <p>5.0 (6) - USA</p>
                            </CardText>
                            <CardText>
                                <p>Life lessons with Katie Zaferes</p>
                            </CardText>
                            <CardText>
                                <p><b>From $136</b>/person</p>
                            </CardText>
                        </CardBody>
                    </Col>
                </Row>
            </Container>
        </Card>


    </>
    );
}

export default Cards;