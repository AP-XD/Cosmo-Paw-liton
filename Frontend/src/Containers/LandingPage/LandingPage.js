import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dog from "../../Assets/LandingDog.png";

import './LandingPage.scss'
function LandingPage() {
  return (
    <div className="Landing">
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                  <div className="heading-name">
                <h1 >COSMOPAWLITON</h1>
                </div>
                <h1 className="heading-text">
                  Cosmopawliton is the one-stop solution to all animal welfare
                  activities, be it adoption, donation at charities or locating an
                  injured animal or your lost puppy.
                </h1>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img src={dog} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default LandingPage;
