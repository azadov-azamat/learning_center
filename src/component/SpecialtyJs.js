import React from "react";
import {Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";


export default function SpecialtyJs() {
    return (
        <>
            <Container>
                <div className="">
                    <h3>Mutaxassislik</h3>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="tabled">
                            <table className='table table-borderless'>
                                <tr>
                                    <td className=" align-items-center"><FontAwesomeIcon icon={faHandPointRight}
                                                                                         style={{fontSize: '4vh'}}/> Python
                                        web full stack development
                                    </td>
                                </tr>
                                <tr>
                                    <td>Python backend development</td>
                                </tr>
                                <tr>
                                    <td>Java full stack development</td>
                                </tr>
                                <tr>
                                    <td>Java backend development</td>
                                </tr>
                                <tr>
                                    <td>Android development</td>
                                </tr>
                                <tr>
                                    <td>IOS development</td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="tabled">
                            <table className='table table-borderless'>
                                <tr>
                                    <td>Flutter development</td>
                                </tr>
                                <tr>
                                    <td>ReactJs frontend development</td>
                                </tr>
                                <tr>
                                    <td>VueJs frontend development</td>
                                </tr>
                                <tr>
                                    <td>UI/UX design (web, mobile)</td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="mt-5">
                    <h5>Kurslar</h5>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="tabled">
                            <table className='table table-borderless'>
                                <tr>
                                    <td className=" align-items-center"><FontAwesomeIcon icon={faHandPointRight}
                                                                                         style={{fontSize: '4vh'}}/> PDP
                                        Start
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                    <Col md={6} className='mb-5'>
                        <div className="tabled">
                            <table className='table table-borderless'>
                                <tr>
                                    <td>Algarithm&Datastructure</td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}