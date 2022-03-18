import React from 'react';
import { Card, CardBody, CardText, CardImg, Container, Row, Col } from 'reactstrap';
function Cards(props) {
    const myCard = props.hero.map(item => {
        let badgeText
        if (item.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (item.location === "Online") {
            badgeText = "ONLINE"
        }
        return (
        <Col key={item.id} sm={{size:3, offset: 1}}>
            <Card>
                <CardImg src={item.coverImg} alt={item.alt}></CardImg>
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <CardText>
                    <img src="assets/star.png" alt="star"></img>
                    <p>{item.stats.rating} ({item.stats.reviewCount}) - {item.location}</p>
                </CardText>
                <CardText>
                    <p>{item.title}</p>
                </CardText>
                <CardText>
                    <p><b>From {"$"}{item.price}</b>/person</p>
                </CardText>
                
            </Card>
        </Col>
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