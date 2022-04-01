import React, {useEffect} from "react";
import MentorLayout from "../MentorLayout";
import {Col, Container, Row} from "reactstrap";
import {toast} from "react-toastify";

export default function MentorPage(){
    useEffect(()=>{
        toast.dark("Kechirasiz loyiha ustidan ishlanyabdi")
    })
    return(
        <>
            <div className="d-inline-flex mt-4">
                <MentorLayout/>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>Mentor Dashboard</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
