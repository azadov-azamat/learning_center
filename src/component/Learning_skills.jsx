import React from 'react'
import {Col, Container, Row} from "reactstrap";

export default () => {
    return (
        <div className={"learning_skills section_3"}>
            <Container fluid>
                <Row className={""}>
                    <Col className={"image"}>
                        <div className="img img1-block">
                            <img
                                src="https://global-uploads.webflow.com/5f871b1a1b56ad12badcc37c/5f871b1a1b56ad901ddcc3b5_img1.jpg"
                                alt="image_boy"/>
                        </div>
                    </Col>
                    <Col className={"text"}>
                        <h2>
                            Hello
                            <span className={"blue_text_2"}> Kodland!</span>
                        </h2>
                        <p className={"par_24"}>We teach essential skills:</p>
                        <div className="list-tag-1">
                            <div className="tag-2">Computer literacy</div>
                            <div className="tag-2">Website Building</div>
                            <div className="tag-2">Game Creation</div>
                            <div className="tag-2">Computer Programming<br/></div>
                        </div>
                        <p className={"par_24"}>Classes take place online instead of taking boring tests, kids build
                            their own projects</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}