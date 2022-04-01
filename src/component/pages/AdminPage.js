import React, {useEffect} from "react";
import AdminLayout from "../AdminLayout";
import {Col, Container, Row} from "reactstrap";
import {toast} from "react-toastify";

export default function AdminPage() {

    useEffect(()=>{
        toast.dark("Kechirasiz loyiha ustidan ishlanyabdi")
    })
    return (
        <div className='d-inline-flex mt-4'>
                <AdminLayout/>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Director Dashboard</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
