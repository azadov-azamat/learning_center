import React from "react";
import {Col, Container, Row} from "reactstrap";


export default function ChanceJs() {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md={12}>
                        <div className="aboutBootcamp mt-5">
                            <h1>Personal imkoniyatlar</h1>
                            <p>Dasturlashni endi o`rganayotganlar uchun istalgan bir sohada o`zlashtirilishi kerak
                                bo`lgan bilimlar ketma ketligi hamda bu sohaning istiqboli aniq dalillar bilan ko`rsatib
                                beradi.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className={'text-center mt-4'}>
                        <div className="cardChance mb-5">
                            <div className="">
                                <img src="./images/img_5.png"/>
                            </div>
                            <div className="cardText">
                                <h3>Yagona tizim</h3>
                                <p>Ushbu ta`lim shaklida siz bizning o`quv birida o`zingizga qulay vaqtda ta`lim
                                    olishingiz mumkin</p>
                            </div>
                        </div>
                        <div className="cardChance mb-5">
                            <div className="">
                                <img src="./images/img_7.png"/>
                            </div>
                            <div className="cardText">
                                <h3>Baholash tizim</h3>
                                <p>Ushbu ta`lim shaklida siz bizning o`quv birida o`zingizga qulay vaqtda ta`lim
                                    olishingiz mumkin</p>
                            </div>
                        </div>
                        <div className="cardChance">
                            <div className="">
                                <img src="./images/img_9.png"/>
                            </div>
                            <div className="cardText">
                                <h3>Tayyor resume</h3>
                                <p>Ushbu ta`lim shaklida siz bizning o`quv birida o`zingizga qulay vaqtda ta`lim
                                    olishingiz mumkin</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className={'text-center mt-4'}>
                        <div className="cardChance mb-5">
                            <div className="">
                                <img src="./images/img_6.png"/>
                            </div>
                            <div className="cardText">
                                <h3>Topshiriqlar</h3>
                                <p>Ushbu ta`lim shaklida siz bizning o`quv birida o`zingizga qulay vaqtda ta`lim
                                    olishingiz mumkin</p>
                            </div>
                        </div>
                        <div className="cardChance mb-5">
                            <div className="">
                                <img src="./images/img_8.png"/>
                            </div>
                            <div className="cardText">
                                <h3>Bildirishnomalar</h3>
                                <p>Ushbu ta`lim shaklida siz bizning o`quv birida o`zingizga qulay vaqtda ta`lim
                                    olishingiz mumkin</p>
                            </div>
                        </div>
                        <div className="cardChance">
                            <div className="cardText ficha">
                                <h3>Yana bitta ficha</h3>
                                <p>Ushbu ta`lim shaklida siz bizning o`quv birida o`zingizga qulay vaqtda ta`lim
                                    olishingiz mumkin</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}