import React from "react";
import {Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapPin} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function FooterJs() {
    return (
        <>
            <Container>
                <Row className="mt-5 footer1 mb-3">
                    <Col md={4} className={'mb-4'}>
                        <div className="">
                            <h3>(78) 777-47-47</h3>
                            <p>Yagona xizmat raqami</p>
                        </div>
                        <div className="mt-4">
                            <FontAwesomeIcon icon={faMapPin}/>
                            <p>Toshkent shahar. Shayxontohur tum., Zarqaynar ko'ch., 3b-uy.</p>
                        </div>
                        <div className="mt-4">
                            <img src="./images/img_10.png" className='sertificateImg mr-3'/>
                            <img src="./images/img_11.png" className='sertificateImg'/>


                        </div>
                    </Col>
                    <Col md={8}>
                        <Container className="d-inline-flex justify-content-between ">
                            <Col md={4}>
                                <div className="text-center">
                                    <h3>Asosiy</h3>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                Kompaniya haqida
                                            </Link>
                                        </li>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                Hamkorlik
                                            </Link>
                                        </li>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                Huquqiy hujjatlar
                                            </Link>
                                        </li>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                Bog`lanish
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="text-center">
                                    <h3>Ta`lim</h3>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                Onside
                                            </Link>
                                        </li>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                Online
                                            </Link>
                                        </li>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                Imtiyoz
                                            </Link>
                                        </li>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                Code skill
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="text-center">
                                    <h3>Loyihalar</h3>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                PDP Live
                                            </Link>
                                        </li>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                PDP Meetup
                                            </Link>
                                        </li>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                PDP Generation
                                            </Link>
                                        </li>
                                        <li className='list-group'>
                                            <Link style={{color: 'black'}} className='nav-link'>
                                                Sertificate
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="">
                                Inflex, Inc. 2017 – {new Date().getFullYear()}
                            </div>
                            <div className="d-inline-flex">
                                <div className="mr-3">
                                    <a href=" https://www.facebook.com/azamat.azadov.9/">
                                        <i className="fa fa-facebook" style={{color: "rgba(8,5,154,0.98)", fontSize: '1.5rem'}}/>
                                    </a>
                                </div>
                                <div className="mr-3">
                                    <a href="https://www.instagram.com/azadov_azamat_life/">
                                        <i className="fa fa-instagram"  style={{color: "rgba(154,63,37,0.98)", fontSize: '1.5rem'}}/>
                                    </a>
                                </div>
                                <div className="mr-2">
                                    <a href="https://t.me/pdpuz">
                                        <i className="fa fa-telegram"  style={{color: "rgba(11,98,154,0.98)", fontSize: '1.5rem'}}/>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
