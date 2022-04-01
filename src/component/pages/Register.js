import React from "react";
import NavbarJs from "../NavbarJs";
import {Col, Container, Row} from "reactstrap";
import {AvField, AvForm} from 'availity-reactstrap-validation';
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";

export default function Register() {


    const history = useHistory();

    function loginPage() {
        history.push('/signIn');
    }

    function register(e, v){
        localStorage.setItem("newUser", JSON.stringify(v))
        toast.success("Local storage ga Saqlandi, Kechirasiz lekin loyiha xali tayyor emas");
    }

    return (
        <div className='signIn'>
            <NavbarJs/>
            <Container>
                <Row>
                    <Col
                        md={12}
                        className='d-flex '
                        style={{marginTop: '6em'}}
                    >
                        <Row className='align-items-center signUp ' style={{width: '37em'}}>
                            <Col md={6}>
                                <div style={{width: '18em'}} className="text-center ">
                                    <h2>Welcome to PDP IT Academy</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet
                                        architecto consequuntur </p>
                                    <button id='btn' className='btn btn-outline-info' onClick={loginPage}>SignIn
                                    </button>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div style={{width: '18em'}}
                                     className='text-center mb-3 mt-2 d-flex justify-content-center align-content-center'>
                                    <AvForm onValidSubmit={register}>
                                        <AvField
                                            label='Your name'
                                            name='firstName'
                                            placeholder='Ex: Davronjon'
                                            minLength={3}
                                            maxLength={12}

                                        />
                                        <AvField
                                            label='Your phone number'
                                            name='phoneNumber'
                                            placeholder='Ex: +998 99 680 22 08'
                                            maxLength={14}
                                            required
                                        />
                                        <AvField
                                            label='Your password'
                                            name='password'
                                            placeholder='Ex: root123'
                                            minLength={4}
                                            maxLength={16}

                                        />
                                        <button type='submit' id='btn '
                                                className='btn btn-outline-success'>Registration
                                        </button>
                                    </AvForm>
                                </div>
                            </Col>
                            </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
