import React from 'react';
import { Card, CardBody, CardText, CardImg, Container, Row, Col } from 'reactstrap';
function Cards(props) {
    const myCard = props.hero.map(item => {
        return (
                <Card>
                    <Col sm={{size:3}}>
                            <CardImg src={item.coverImg} alt={item.alt}></CardImg>
                            <CardText>
                                <img src="assets/star.png" alt="star"></img>
                                <p>{item.rating} ({item.reviewCount}) - {item.location}</p>
                            </CardText>
                            <CardText>
                                <p>{item.title}</p>
                            </CardText>
                            <CardText>
                                <p><b>From {"$"}{item.price}</b>/person</p>
                            </CardText>
                    </Col>
                </Card>
        )
    })
    return (
        <>
            <Row className="card-row">
                {myCard}
            </Row>
        </>
    );
}

export default Cards;