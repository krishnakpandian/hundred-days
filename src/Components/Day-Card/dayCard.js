import React from 'react';
import './dayCard.scss';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';

const dayCard = (props) => {
    return (
        <React.Fragment>
            <div class="card-container">
                <Fade down delay={300} distance={"0.5em"}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Day: {props.index}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props.data.challenge}</Card.Subtitle>
                            <Card.Text>{props.data.description}</Card.Text>
                            <Card.Link href={props.data.link}>{props.data.date}</Card.Link>
                        </Card.Body>
                    </Card>
                </Fade>
            </div>
        </React.Fragment>
    );
}

export default dayCard;