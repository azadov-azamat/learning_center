import React from "react";
import {Col, Container, Row} from "reactstrap";

export default function PartnerJs(){
    return(
        <>
        <Container>
            <Row className='mt-5 mb-5'>
                <Col md={12}>
                    <div className="aboutBootcamp">
                        <h1 className='mb-4'>Hamkorlarimiz</h1>
                        <p>Dasturlashni endi o`rganayotganlar uchun istalgan bir sohada o`zlashtirishi kerak bo`lgan bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq dalillar bilan ko`rsatib beradi.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                  <div className="d-inline-flex justify-content-between">
                      <div className="border partnerImg d-flex justify-content-center align-content-center">
                          <img src="https://pdp.uz/api/file/get/13f41fcb-5f5d-440b-af48-ad6d006fbfc2"/>
                      </div>
                      <div className="border partnerImg d-flex justify-content-center align-content-center">
                          <img src="https://pdp.uz/api/file/get/8b2c5b48-e117-4d47-a9dd-5564fb588b6a" />
                      </div>
                      <div className="border partnerImg d-flex justify-content-center align-content-center">
                          <img src="https://pdp.uz/api/file/get/52e32c73-5685-4a89-b104-f7ebf6a1f449"/>
                      </div>
                  </div>
                  <div className="d-inline-flex justify-content-between">
                      <div className="border partnerImg d-flex justify-content-center align-content-center">
                          <img src="https://pdp.uz/api/file/get/ee040154-b490-45a4-bd71-ab6eff358a79"/>
                      </div>
                      <div className="border partnerImg d-flex justify-content-center align-content-center">
                          <img src="https://pdp.uz/api/file/get/2b06f763-d04a-4704-8d4b-76ac977d588f"/>
                      </div>
                      <div className="border partnerImg d-flex justify-content-center align-content-center">
                          <img src="https://pdp.uz/api/file/get/21561a97-f9df-4af3-8408-8dfc25833a4c"/>
                      </div>
                  </div>
                </Col>
                <Col md={4}>
                    <div className="d-inline-flex justify-content-between">
                        <div className="border partnerImg d-flex justify-content-center align-content-center">
                            <img src="https://pdp.uz/api/file/get/6189d3be-e95c-4138-b814-92f4847f52ad"/>
                        </div>
                        <div className="border partnerImg d-flex justify-content-center align-content-center">
                            <img src="https://pdp.uz/api/file/get/5cc75948-5ad8-41b5-801a-a1540e03b20d" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}