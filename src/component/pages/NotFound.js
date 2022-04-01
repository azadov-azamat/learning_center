import React from "react";
import {Col, Container, Row} from "reactstrap";
import NavbarJs from "../NavbarJs";
import FooterJs from "../FooterJs";

export default function NotFound(){
    return(
        <>
           <NavbarJs/>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="notFound d-flex justify-content-center align-content-center">
                            <img
                                src="https://pdp.uz/assets/images/404/WMF.svg"
                                style={{width: '40em', marginTop: '2em'}}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <FooterJs/>
        </>
    )
}