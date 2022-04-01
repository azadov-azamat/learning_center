import React from "react"
import {Button, Col, Container, Row} from "reactstrap";

export default  () => {
    return (
        <div className={"section_2"}>
            <Container>
                <Row>
                    <Col>
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
        </div>
    )
}