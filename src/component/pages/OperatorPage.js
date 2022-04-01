import React, {useEffect} from "react";
import OperatorLayout from "../OperatorLayout";
import {Col, Container, Row} from "reactstrap";
import {toast} from "react-toastify";

export default function OperatorPage(){
    useEffect(()=>{
        toast.dark("Kechirasiz loyiha ustidan ishlanyabdi")
    })
    return(
        <>
            <div className="d-inline-flex mt-4">
                <OperatorLayout/>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>Operator Dashboard</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
