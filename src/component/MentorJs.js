import React from "react";
import {Card, Col, Container, Row} from "reactstrap";

export default function MentorJs(){
    return(
        <>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col md={12}>
                        <div className="aboutBootcamp">
                            <h1 className='mb-4'>Mentorlar</h1>
                            <p>Dasturlashni endi o`rganayotganlar uchun istalgan bir sohada o`zlashtirishi kerak bo`lgan bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq dalillar bilan ko`rsatib beradi.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card>
                            <div className="mentors align-items-center text-center">
                                <div className="divImg d-flex justify-content-center align-content-center">
                                    <img src="./images/mentors/img.png" className='mentorImg mt-5'/>
                                </div>
                                <div className="aboutMentor mt-5">
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <div className="companyImg mb-4">
                                        <img src="https://pdp.uz/api/file/get/6bed75f4-5c40-413f-ab68-a79f27b440d9" className={' text-info'}/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <div className="mentors align-items-center text-center">
                                <div className="divImg d-flex justify-content-center align-content-center">
                                    <img src="./images/mentors/img_1.png" className='mentorImg mt-5'/>
                                </div>
                                <div className="aboutMentor mt-5">
                                    <h4>Azimjon Pulatov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <div className="companyImg mb-4">
                                        <img src="https://pdp.uz/api/file/get/6bed75f4-5c40-413f-ab68-a79f27b440d9" className={' text-info'}/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <div className="mentors align-items-center text-center">
                                <div className="divImg d-flex justify-content-center align-content-center">
                                    <img src="./images/mentors/img_2.png" className='mentorImg mt-5'/>
                                </div>
                                <div className="aboutMentor mt-5">
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <div className="companyImg mb-4">
                                        <img src="https://pdp.uz/api/file/get/6bed75f4-5c40-413f-ab68-a79f27b440d9" className={' text-info'}/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col md={4}>
                        <Card>
                            <div className="mentors align-items-center text-center">
                                <div className="divImg d-flex justify-content-center align-content-center">
                                    <img src="./images/mentors/img_3.png" className='mentorImg mt-5'/>
                                </div>
                                <div className="aboutMentor mt-5">
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <div className="companyImg mb-4">
                                        <img src="https://pdp.uz/api/file/get/6bed75f4-5c40-413f-ab68-a79f27b440d9" className={' text-info'}/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <div className="mentors align-items-center text-center">
                                <div className="divImg d-flex justify-content-center align-content-center">
                                    <img src="./images/mentors/img_4.png" className='mentorImg mt-5'/>
                                </div>
                                <div className="aboutMentor mt-5">
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <div className="companyImg mb-4">
                                        <img src="https://pdp.uz/api/file/get/6bed75f4-5c40-413f-ab68-a79f27b440d9" className={' text-info'}/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <div className="mentors align-items-center text-center">
                                <div className="divImg d-flex justify-content-center align-content-center">
                                    <img src="./images/mentors/img_5.png" className='mentorImg mt-5'/>
                                </div>
                                <div className="aboutMentor mt-5">
                                    <h4>Khurshidbek Kurbanov</h4>
                                    <p>Senior Mobile Developer</p>
                                    <div className="companyImg mb-4">
                                        <img src="https://pdp.uz/api/file/get/6bed75f4-5c40-413f-ab68-a79f27b440d9" className={' text-info'}/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
