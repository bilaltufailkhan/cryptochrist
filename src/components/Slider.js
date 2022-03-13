import React, { Component } from "react";
import ArrowLeft from "../assets/img/chevron-left@2x.png";
import ArrowRight from "../assets/img/chevron-right@2x.png";
import { Col, Container, Row } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ImgOne from "../assets/img/Slider/1.PNG";
import ImgTwo from "../assets/img/Slider/2.PNG";
import ImgThree from "../assets/img/Slider/3.PNG";
import ImgFour from "../assets/img/Slider/4.png";
import ImgFive from "../assets/img/Slider/5.png";
import ImgSix from "../assets/img/Slider/6.PNG";
import ImgSeven from "../assets/img/Slider/7.PNG";
import ImgEight from "../assets/img/Slider/8.PNG";
import ImgNine from "../assets/img/Slider/9.png";
import ImgTen from "../assets/img/Slider/10.png";
import ImgEleven from "../assets/img/Slider/11.png";
import ImgTwelve from "../assets/img/Slider/12.png";
import ImgThirteen from "../assets/img/Slider/13.PNG";
import ImgFourteen from "../assets/img/Slider/14.PNG";
import ImgFifteen from "../assets/img/Slider/15.PNG";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class Slider extends Component {
  render() {
    return (
		<>
			<Container className='slider__section'>
				<Row className='justify-content-center mb-5'>
					<Col xs='12' className='text-center'>
						<div id='style__heading'>
							<h1
								id='heading'
								style={{
									color: 'rgb(255, 255, 255)',
									fontWeight: '700',
									fontSize: '100px',
									lineHeight: '97px',
									fontStyle: 'normal',
								}}
							>
								Crypto Christ
							</h1>
							<h1
								id='outline'
								style={{
									fontWeight: '700',
									fontSize: '100px',
									lineHeight: '97px',
									fontStyle: 'normal',
								}}
							>
								Crypto Christ
							</h1>
						</div>
						<div id='style__heading'>
							<h1
								id='heading'
								style={{
									color: 'rgb(6, 255, 240)',
									fontWeight: '700',
									fontStyle: 'normal',
								}}
							>
								NFT
							</h1>
							<h1
								id='nftOutline'
								style={{
									fontWeight: '700',
									fontStyle: 'normal',
								}}
							>
								NFT
							</h1>
						</div>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Col align='center'>
						<Carousel
							infinite={true}
							responsive={responsive}
							className='carousel'
						>
							<div>
								<img
									src={ImgOne}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgTwo}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgThree}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgFour}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgFive}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgSix}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgSeven}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgEight}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgNine}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgTen}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgEleven}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgTwelve}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgThirteen}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgFourteen}
									width='300rem'
									height='auto'
								/>
							</div>
							<div>
								<img
									src={ImgFifteen}
									width='300rem'
									height='auto'
								/>
							</div>
						</Carousel>
					</Col>
				</Row>
			</Container>

			{/* <Row className="justify-content-center h-50 align-items-center">
          <Col md={1} className="text-center">
            <img src={ArrowLeft} />
          </Col>
          <Col md={3} className="text-center">
            <img src={ChristOne} />
          </Col>
          <Col md={3} className="text-center">
            <img src={ChristTwo} />
          </Col>
          <Col md={3} className="text-center">
            <img src={ChristOne} />
          </Col>
          <Col md={1} className="text-center">
            <img src={ArrowRight} />
          </Col>
        </Row> */}
		</>
	);
  }
}

export default Slider;
