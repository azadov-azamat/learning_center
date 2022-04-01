import React from "react";
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";

export default function AdminLayout(){
    return(
        <>
            <Row>
                <Col md={12} className='ml-3' >
                    <div className="">
                        <a href="/adminPage">
                            <img src="https://pdp.uz/assets/icons/pdpuz-logo.svg "/>
                        </a>
                    </div>
                    <div className="mt-5">
                        <div className="dashboard">
                            <span>Dashboard</span>
                        </div>
                        <div className="mt-3">
                            <span>Sozlamalar</span>
                        </div>
                    </div>
                    <div className="" style={{marginTop: '55vh'}}>
                        <div className="">
                            <Link to='/' className='card-link text-black-50'>Home page pdp.uz</Link>
                        </div>
                    <div className="mt-2">
                            <Link to='/' className='card-link text-black-50'>Chiqish</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}