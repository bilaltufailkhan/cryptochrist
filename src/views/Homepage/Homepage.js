import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import NavMain from "../../components/Navbars/NavMain";
import Ellipse7 from "../../assets/img/Ellipse7.png";
import Ellipse11 from "../../assets/img/Ellipse11.png";
import Ellipse18 from "../../assets/img/Ellipse18.png";
import Ellipse19 from "../../assets/img/Ellipse19.png";
import Ellipse20 from "../../assets/img/Ellipse20.png";
import Ellipse21 from "../../assets/img/Ellipse21.png";
import Ellipse22 from "../../assets/img/Ellipse22.png";
import Ellipse81 from "../../assets/img/Ellipse81.png";

import Slider from "../../components/Slider";
import Card from "../../components/Card";
import Team from "../../components/Team";
import Faqs from "../../components/Faqs";
import RoadMap from "../../components/RoadMap";
import Footer from "../../components/Footer";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageId: "",
    };
  }

  pageRedirect = (pgId) => {
    console.log("**Page Id" + pgId);
    this.setState({ pageId: pgId });
  };

  render() {
    return (
      <div>
        <NavMain setPageId={this.pageRedirect} />
        {/* <NewNav /> */}
        {/* <div className="spacer-30"></div> */}
        <div className="slider__section">
          {/* <img src={Ellipse7} alt="Ellipse 7" className="ellipse__7" /> */}
          <Slider />
        </div>
        {/* <img src={Ellipse21} alt="Ellipse21" className="ellipse__21" /> */}
        <div className="spacer-30"></div>
        {/* <img
          src={Ellipse81}
          alt="Ellipse81"
          className="ellipse__81 d-none d-md-block"
        /> */}
        <div id="about">
          <Card />
        </div>
        {/* <img
          src={Ellipse81}
          alt="Ellipse81"
          className="ellipse__81 d-block d-md-none"
        /> */}
        {/* <img
          src={Ellipse20}
          alt="Ellipse20"
          className="ellipse__20 d-none d-md-block"
        /> */}
        <div className="spacer-30"></div>
        <div id="roadmap">
          <RoadMap />
        </div>
        {/* <img
          src={Ellipse20}
          alt="Ellipse20"
          className="ellipse__20 d-block d-md-none"
        />
        <img
          src={Ellipse18}
          alt="Ellipse18"
          className="ellipse__18 d-none d-md-block"
        />
        <img src={Ellipse19} alt="Ellipse19" className="ellipse__19" />
        <img src={Ellipse11} alt="Ellipse11" className="ellipse__11" /> */}
        <div className="spacer-30"></div>
        <Team />
        <div className="spacer-30"></div>
        {/* <img src={Ellipse22} alt="Ellipse22" className="ellipse__22" /> */}
        <Faqs />
        <div className="spacer-30"></div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
