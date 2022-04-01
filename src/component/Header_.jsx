import React from "react"
import {Button, Col, Container, Row} from "reactstrap";

export default () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <div className="block1">
                            <h1>Turning dreams into reality!</h1>
                            <p>
                                Kodland is a Global Online coding school for kids aged 8-17
                            </p>
                            <Button className={"button-2  w-button"}>Book a free lesson</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}