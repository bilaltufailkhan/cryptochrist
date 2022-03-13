import React, { Component } from "react";
// import Accordion from "react-bootstrap/Accordion";
import { Row, Col, Accordion, Container } from "react-bootstrap";
import { Collapse } from "reactstrap";

class Faqs extends Component {
  state = {
    id: "-1",
  };
  render() {
    return (
      <Container id="faq" style={{ height: "60vh" }}>
        <Row className="justify-content-center">
          <Col md={9}>
            <div className="card__content text-center">
              <div id="style__heading">
                <h2 id="heading" style={{ fontStyle: "normal" }}>
                  FAQs
                </h2>
                <h2 id="outline" style={{ fontStyle: "normal" }}>
                  FAQs
                </h2>
              </div>
              <div className="border-line" style={{ width: "63px" }}></div>
              <div className="spacer-20"></div>
            </div>
            <div>
              <div
                className="d-flex align-items-center pb-3"
                style={{ color: "#00FFC7", borderBottom: "1px solid #C6FFF2" }}
                onClick={(e) =>
                  this.setState((prevState) => ({
                    id: prevState.id == "0" ? "-1" : "0",
                  }))
                }
              >
                <h3 className="font-weight-bold">What are NFTs?</h3>
                <i
                  className={`ml-auto fa fa-angle-${
                    this.state.id == "0" ? "up" : "down"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Collapse isOpen={this.state.id == "0"}>
                <p className="text-white mt-3">
                  A non-fungible token is ownership of a unique digital object.
                  This data is then stored on a digital ledger called a
                  blockchain.
                </p>
                <p className="text-white">
                  NFTs can be anything from digital artwork to real estate to
                  exclusive memberships.
                </p>
              </Collapse>
            </div>
            <div className="mt-4">
              <div
                className="d-flex align-items-center pb-3"
                style={{ color: "#00FFC7", borderBottom: "1px solid #C6FFF2" }}
                onClick={(e) =>
                  this.setState((prevState) => ({
                    id: prevState.id == "1" ? "-1" : "1",
                  }))
                }
              >
                <h3 className="font-weight-bold">
                  What is blockchain technology?
                </h3>
                <i
                  className={`ml-auto fa fa-angle-${
                    this.state.id == "1" ? "up" : "down"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Collapse isOpen={this.state.id == "1"}>
                <p className="text-white mt-3">
                  A blockchain is a decentralized database that stores encrypted
                  records called blocks that are then linked together on a
                  network.
                </p>
                <p className="text-white">
                  Once a record has been added to the blockchain it cannot be
                  altered which allows people a secure way to share data.
                </p>
              </Collapse>
            </div>
            <div className="mt-4">
              <div
                className="d-flex align-items-center pb-3"
                style={{ color: "#00FFC7", borderBottom: "1px solid #C6FFF2" }}
                onClick={(e) =>
                  this.setState((prevState) => ({
                    id: prevState.id == "2" ? "-1" : "2",
                  }))
                }
              >
                <h3 className="font-weight-bold">How to mint?</h3>
                <i
                  className={`ml-auto fa fa-angle-${
                    this.state.id == "2" ? "up" : "down"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Collapse isOpen={this.state.id == "2"}>
                <p className="text-white mt-3">
                  Minting will be available on our website, where you will be
                  able to connect your wallet and mint your NFT.
                </p>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Faqs;
