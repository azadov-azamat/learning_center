import React from "react";
import {Card, CardBody, CardFooter, Col, Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";


export default function CourseCards(){
    return(
        <>
            <div className='d-inline-flex align-items-center mt-5 '>
                <Col md={2} className="ml-4">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{fontSize: '5vh'}}/>
                </Col>
                <Col md={8}>
                    <div className="d-inline-flex justify-content-between ">
                        <Card className='cards card1'>
                            <div className="d-flex justify-content-center align-content-center">
                                <img src="./images/img_1.png" className='image' />
                            </div>
                            <div className="aboutCard ml-4">
                                <span>Java web full stack development</span>
                            </div>
                        </Card>
                        <Card className='cards card2'>
                            <div className="d-flex justify-content-center align-content-center">
                                <img src="./images/img_2.png" className='image' />
                            </div>
                            <div className="aboutCard ml-4">
                                <span>Flutter <br/> development</span>
                            </div>
                        </Card>
                        <Card className='cards card3'>
                            <div className="d-flex justify-content-center align-content-center">
                                <img src="./images/img_3.png" className='image' />
                            </div>
                            <div className="aboutCard ml-4">
                                <span>Full stack Python development</span>
                            </div>
                        </Card>
                        <Card className='cards card4'>
                            <div className="d-flex justify-content-center align-content-center">
                                <img src="./images/img_4.png" className='image' />
                            </div>
                            <div className="aboutCard ml-4">
                                <span>React <br/> development</span>
                            </div>
                        </Card>
                    </div>
                </Col>
            </div>
        </>
    )
}