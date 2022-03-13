import React, { Component } from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/img/1white70.png";
import Ellipse10 from "../../assets/img/Ellipse10.png";
import Ellipse8 from "../../assets/img/Ellipse8.png";
import Wallet from "../../assets/img/Wallet-1.png";
import "../../assets/css/responsive.css";
import Footer from "../Footer";
import "../../assets/css/responsive.css";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Button,
} from "reactstrap";
import { Link } from "react-scroll";

class NavMain extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    let { setPageId } = this.props;
    return (
      <div className="nav__main">
        {/* <img src={Ellipse8} alt="Ellipse 8" className="ellipse__8" />
        <img src={Ellipse10} alt="Ellipse 10" className="ellipse__10" /> */}
        <Navbar color="light" light expand="md" className="mx-5" className="">
          <Nav className="d-sm-block d-md-none" navbar>
            <NavItem>
              {this.state.isOpen ? (
                <NavLink href="" className="">
                  <img src={logo} />
                </NavLink>
              ) : (
                <NavLink href="" id="wallet__btn_small" className="">
                  <img src={Wallet} />
                </NavLink>
              )}
            </NavItem>
          </Nav>
          <Link
            href="/"
            className={`mx-auto d-sm-block d-md-none ${
              this.state.isOpen ? "d-none" : "d-block"
            }`}
          >
            <img src={logo} />
          </Link>
          <Button
            onClick={this.toggle}
            size="lg"
            className="toggler-btn d-md-none"
          >
            {this.state.isOpen ? (
              <i class="fas fa-times"></i>
            ) : (
              <i class="fas fa-bars"></i>
            )}
          </Button>

          <Collapse isOpen={this.state.isOpen} navbar className="mobile__nav">
            <div className="d-flex d-md-none align-items-center">
              <img src={logo} />
              <span
                onClick={(e) => this.setState({ isOpen: false })}
                className="text-white ml-auto"
                style={{ fontSize: 32 }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <Nav className="mr-auto nav__setting" navbar>
              <NavItem className="nav__items">
                <NavLink href="/" id="mint__btn">
                  Mint
                </NavLink>
              </NavItem>

              <NavItem className="nav__items">
                <NavLink href="" id="wallet__btn">
                  <img src={Wallet} />
                  &nbsp;Connect Wallet
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarBrand href="/" className="mx-auto d-md-block d-none">
              <img src={logo} />
            </NavbarBrand>

            {/* <Nav className="mx-auto" navbar>
              
              <NavItem>
                <NavLink href="/">
                  <img src={logo} />
                </NavLink>
              </NavItem>
            </Nav> */}

            <Nav className="ml-auto nav__setting right__links">
              <NavItem className="nav__items">
                <Link
                  className="navlink"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="about"
                  activeClass="navlink-active"
                >
                  About
                </Link>
              </NavItem>
              <NavItem className="nav__items">
                {/* <NavLink to="/roadmap">Roadmap</NavLink> */}
                <Link
                  className="navlink"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="roadmap"
                  activeClass="navlink-active"
                >
                  Roadmap
                </Link>
              </NavItem>
              <NavItem className="nav__items">
                {/* <NavLink href="/">Team</NavLink> */}
                <Link
                  className="navlink"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="team"
                  activeClass="navlink-active"
                >
                  Team
                </Link>
              </NavItem>
              <div className="d-sm-block d-md-none nav__foot w-100">
                <Footer />
              </div>
            </Nav>
          </Collapse>
        </Navbar>
        {/* <div className="nav__bar">
          <div className="left__links">
            <Link to="/" id="mint__btn">
              Mint
            </Link>
            <Link to="/" id="wallet__btn">
              <img src={Wallet} />
              &nbsp;Connect Wallet
            </Link>
          </div>
          <div className="navbar__brand">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="right__links">
            <Link to="/">About Us</Link>
            <Link to="/">Roadmap</Link>
            <Link to="/">Team</Link>
          </div>
        </div> */}
      </div>
    );
  }
}

export default NavMain;
