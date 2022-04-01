import React from "react"
import {Col, Container, Row} from "reactstrap";

export default () => {
    return (
        <div className={"section_4"}>
            <Container>
                <Row>
                    <Col>
                        <div className="stat-heading">10 000 students</div>
                        <div className="stat-text">Are studying at Kodland right now. 15,000 kids completed our courses
                            in the last 3
                            years.
                        </div>
                    </Col>
                    <Col>
                        <div className="stat-heading">40 000 projects</div>
                        <div className="stat-text">Built by kids with their own hands so far. Some of them are freely available at our social media Hub.
                        </div>
                    </Col>
                    <Col>
                        <div className="stat-heading">7 complete courses</div>
                        <div className="stat-text">Students choose what they want to learn: Python, Unity, Roblox, or another one of our offerings
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}