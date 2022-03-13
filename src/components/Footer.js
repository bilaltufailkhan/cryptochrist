import React, { Component } from "react";
import { Container } from "reactstrap";
import OpenSea from "../assets/img/Opensea@3x-1.svg";
import Twitter from "../assets/img/Twitter@3x-2.svg";
import Instagram from "../assets/img/Instagram@3x-1.svg";
import Discord from "../assets/img/Discord@3x-2.svg";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <div className="footer">
          <a href="https://twitter.com/CryptoChristNFT" target="_blank">
            <span className="footer__icon">
              <img src={Twitter} />
            </span>
          </a>
          <a href="https://discord.gg/MYXaUNH9jt" target="_blank">
            <span className="footer__icon">
              <img src={Discord} />
            </span>
          </a>
          <a href="https://www.instagram.com/cryptochristnft/" target="_blank">
            <span className="footer__icon">
              <img src={Instagram} />
            </span>
          </a>
          <a
            href="https://opensea.io/collection/cryptochristnft"
            target="_blank"
          >
            <span className="footer__icon">
              <img src={OpenSea} />
            </span>
          </a>
        </div>
      </Container>
    );
  }
}

export default Footer;
