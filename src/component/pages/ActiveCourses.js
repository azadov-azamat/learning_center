import React from "react";
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

export default function ActiveCourses() {

    const styleAccount = {
        zIndex: '1000',
        borderRadius: '20px',
        marginTop: "12vh",
        // width: "70%"
        // marginRight: '200px'
    }

    const styleStory = {
        width: "50px",
        height: "50px",
        borderRadius: "50%"
    }

    return (
        <div style={styleAccount} className='insta_navbar position-fixed'>
            <Container>
                <Row>
                    <Col className={"account_user d-flex justify-content-between align-items-center bg-white w-100 shadow mt-4"}>
                        <div className="p-3 d-flex align-items-center">
                            <div className="img border" style={styleStory}>
                            </div>
                            <div className="user_name mx-2 mt-1">
                                <p><b>azadov_azamat</b></p>
                                {/*<span className={"text-opacity-25"}>Azamat Azadov</span>*/}
                            </div>
                        </div>
                        <div className="switch_account mx-5">
                            <Link to={"/"} className={"nav-link"}>Switch</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
