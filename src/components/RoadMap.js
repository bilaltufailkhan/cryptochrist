import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import RoadMapItem from "./RoadMapItem";

import "../assets/css/responsive.css";

class RoadMap extends React.Component {
  render() {
    return (
      <>
        <Container id="roadmap">
          <Row className="justify-content-center align-items-center pt-4 pb-4">
            <Col md={9}>
              <div className="card__content text-center">
                <div id="style__heading">
                  <h2 id="heading" style={{ fontStyle: "normal" }}>
                    ROADMAP
                  </h2>
                  <h2 id="outline" style={{ fontStyle: "normal" }}>
                    ROADMAP
                  </h2>
                </div>
                <div className="border-line"></div>
                <div className="spacer-20"></div>
              </div>
              <p className="text-white text-center">
                Like any good roadmap, this is an outline of our future goals.
                It will be <br />
                continuously updated. The sky is the limit!
              </p>
              <div className="spacer-30"></div>
              <div className="road-map__items position-relative">
                <div className="vertical__line"></div>

                <RoadMapItem title="Gifted NFT" value="Early 2022 Airdrop" />
                <div className="spacer-10"></div>
                <RoadMapItem title="Giveaways & Merchandise" />
                <div className="spacer-10"></div>
                <RoadMapItem
                  title="Charity Voting"
                  value="A percentage of royalties will be continuously donated to charities chosen by the community"
                />
                <div className="spacer-10"></div>
                <RoadMapItem
                  title="Community Pool"
                  value="A percentage of royalties will fund the community. You will decide how to spend your money"
                />
                <div className="spacer-10"></div>
                <RoadMapItem title="Future Staking Capabilities" />
                <div className="spacer-10"></div>
                <RoadMapItem title="Play to Earn Video Game" />
                <div className="spacer-10"></div>
                <RoadMapItem title="NFT Metaverse Integration" />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default RoadMap;
