import React from 'react';
import './DayCard.scss';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';

const DayCard = (props) => {
    if (props.data.challenge === "Fail") {
        return(
        <React.Fragment>
            <div class="card-container fail">
                <Fade down delay={300} distance={"0.5em"}>
                    <Card bg='warning'>
                        <Card.Body>
                            <Card.Title>Day: {props.index}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props.data.challenge}</Card.Subtitle>
                            <Card.Text>{props.data.description}</Card.Text>
                            <Card.Link>{props.data.date}</Card.Link>
                        </Card.Body>
                    </Card>
                </Fade>
            </div>
        </React.Fragment>
        );
    }
    else {
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
}

export default DayCard;