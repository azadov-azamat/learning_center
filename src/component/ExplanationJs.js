import React from "react";
import {Button, Col, Container, Row} from "reactstrap";
import {useHistory} from "react-router-dom";

export default function ExplanationJs() {
    const history = useHistory();

    function Courses() {
        history.push('/activeCourses');
    }

    return (
        <>
            <Container>
                <Row className='d-inline-flex justify-content-between align-items-center' style={{marginTop: '6em'}}>
                    <Col md={8}>
                        <div className="explanation">
                            <h1>
                               <span>
                                   Dasturlashni <br/>qulay muhitda o`rganing
                               </span>
                            </h1>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="">
                            <img src="./images/img.png" style={{width: '23em', background: 'none'}}/>
                        </div>
                    </Col>
                </Row>
                <Row className=''>
                    <Col md={6} className="talimShakli">
                       <div className="OnOffline border">
                           <div className="line ml-4 mt-4 ">
                               <h3>Online</h3>
                               <p>Ushbu ta`lim shaklida siz bizning o`quv birida o`zingizga qulay vaqtda ta`lim olishingiz
                                   mumkin</p>
                               <Button color='dark' className='bg-dark'>Hoziroq Boshlang</Button>
                           </div>
                       </div>
                    </Col>
                    <Col md={6} className="talimShakli ">
                       <div className="OnOffline border ml-5">
                           <div className="line ml-4 mt-4 ">
                               <h3>Offline</h3>
                               <p>Ushbu ta`lim shaklida siz bizning o`quv birida o`zingizga qulay vaqtda ta`lim olishingiz
                                   mumkin</p>
                               <Button color='success' onClick={Courses}>Kursga yoziling</Button>
                           </div>
                       </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md={12}>
                        <div className="aboutBootcamp">
                            <h1 className='mb-4'>Bootcamp</h1>
                            <p>Dasturlashni endi o`rganayotganlar uchun istalgan bir sohada o`zlashtirishi kerak bo`lgan bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq dalillar bilan ko`rsatib beradi.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
