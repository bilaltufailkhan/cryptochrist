import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

import Matt from "../assets/img/Team/Matt.PNG";
import Lucy from "../assets/img/Team/Lucy.png";
import Tyler from "../assets/img/Team/Tyler.png";
import Noah from "../assets/img/Team/Noah.png";
import TeamCard from "./TeamCard";

class Team extends Component {
  render() {
    return (
      <>
        <Container id="team">
          <Row className="justify-content-center align-items-center pt-4 pb-4">
            <Col md={9}>
              <div className="card__content text-center">
                <div id="style__heading">
                  <h2 id="heading" style={{ fontStyle: "normal" }}>
                    TEAM
                  </h2>
                  <h2 id="outline" style={{ fontStyle: "normal" }}>
                    TEAM
                  </h2>
                </div>
                <div className="border-line" style={{ width: "63px" }}></div>
                <div className="spacer-20"></div>
              </div>
            </Col>
          </Row>
          <Row className="team__content">
            <Col md={6} xs={6} lg={3} className="text-center mb-4 mb-lg-0">
              <TeamCard
                image={Matt}
                name="Matt"
                designation="Creative & Marketing"
              />
            </Col>
            {/* <Col md={1} xs={12} lg={1} className="text-center"></Col> */}
            <Col md={6} xs={6} lg={3} className="text-center mb-4 mb-lg-0">
              <TeamCard
                image={Lucy}
                name="Lucy"
                designation="Finance & Operations"
              />
            </Col>
            {/* <Col md={1} xs={12} lg={1} className="text-center"></Col> */}
            <Col md={6} xs={6} lg={3} className="text-center mb-4 mb-lg-0">
              <TeamCard image={Tyler} name="Tyler" designation="Developer" />
            </Col>
            {/* <Col md={1} xs={12} lg={1} className="text-center"></Col> */}
            <Col md={6} xs={6} lg={3} className="text-center">
              <TeamCard image={Noah} name="Noah" designation="Designer" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Team;
