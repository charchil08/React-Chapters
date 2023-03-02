import React from "react";
import { Card } from "react-bootstrap";
import { FaMapMarkedAlt } from 'react-icons/fa'

const MyCard = ({ details }) => {
    return (
        <Card className="text-center">
            <Card.Body>
                <img
                    height="150"
                    width="150"
                    className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large} />
                <Card.Title>
                    <h1>
                        <span>{details.name?.title} </span>
                        <span>{details.name?.first} </span>
                        <span>{details.name?.last}</span>
                    </h1>
                </Card.Title>
                <Card.Text>
                    <FaMapMarkedAlt />
                    {details.location?.city}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyCard;
