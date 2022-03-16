import React from 'react';
import { Card, CardBody, CardText, CardImg, Container, Row, Col } from 'reactstrap';
function Cards(props) {


    return (
    <>
        <Card>
            <Container>
                <Row>
                    <Col sm={{size:3}}>
                        <CardBody>
                            <CardImg src={props.hero.image} alt="Katie Zaferes"></CardImg>
                            <CardText>
                                <img src="assets/star.png" alt="star"></img>
                                <p>{props.hero.rating} ({props.hero.reviewCount}) - {props.hero.location}</p>
                            </CardText>
                            <CardText>
                                <p>{props.hero.title}</p>
                            </CardText>
                            <CardText>
                                <p><b>From {"$"}{props.hero.price}</b>/person</p>
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