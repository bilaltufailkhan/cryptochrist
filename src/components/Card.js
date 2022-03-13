import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";

import ArtImg from "../assets/img/Art-1.png";
import CommunityImg from "../assets/img/Community-1.png";
import GivingImg from "../assets/img/Giving Back.png";
import TrustImg from "../assets/img/Trust-1.png";
import AboutUsCard from "./AboutUsCard";

class Card extends Component {
  render() {
    return (
      <>
        <Container id="about">
          <Row className="justify-content-center align-items-center pt-4 pb-4">
            <Col md={9}>
              <div className="card__content text-center">
                <div id="style__heading">
                  <h2 id="heading" style={{ fontStyle: "normal" }}>
                    About Us
                  </h2>
                  <h2 id="outline" style={{ fontStyle: "normal" }}>
                    About Us
                  </h2>
                </div>
                <div className="border-line"></div>
              </div>
            </Col>
          </Row>
          <Row
            noGutters
            className="justify-content-center align-items-center pt-4 pb-4"
          >
            <Col md={9} className="mb-4">
              <AboutUsCard
                img={ArtImg}
                title="Art"
                desc="Crypto Christ is a Pop Art Collection of 10,000 unique NFTs inspired by the legendary Andy Warhol and his distinctive use of color blocking."
              />
            </Col>
            <Col md={9} className="mb-4">
              <AboutUsCard
                img={CommunityImg}
                title="Community"
                desc="We want to build a FAMILY where OUR COMMUNITY COMES FIRST. There are NO LIMITS on the exclusive unique opportunities we'd like to create for you."
              />
            </Col>
            <Col md={9} className="mb-4">
              <AboutUsCard
                img={GivingImg}
                title="Giving Back"
                desc="
                This is the reason we are here. Let's make a positive impact
                around the world by giving back the charity!"
              />
            </Col>
            <Col md={9}>
              <AboutUsCard
                img={TrustImg}
                title="Trust & Transparency"
                desc="
                We are passionate about creating an
                  <strong>OPEN AND HONEST</strong> project through transparency.
                  We are here for the long term, but
                  <strong>WE CAN’T DO IT WITHOUT YOU!</strong>"
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Card;
