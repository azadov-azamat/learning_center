import React from "react";
import ReactCardFlip from 'react-card-flip';
import {CardBody, CardHeader} from "reactstrap";

export default class Example extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <CardBody>
                    This is the front of the card.
                    <button onClick={this.handleClick}>Click to flip</button>
                </CardBody>

                <CardHeader>
                    This is the back of the card.
                    <button onClick={this.handleClick}>Click to flip</button>
                </CardHeader>
            </ReactCardFlip>
        )
    }
}