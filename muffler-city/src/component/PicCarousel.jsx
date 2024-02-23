/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import iso1 from '../assets/iso1.jpg';
import iso2 from '../assets/iso2.jpg';
import iso3 from '../assets/iso3.jpg';

function PicCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={iso1} alt='image'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={iso2} alt='image'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={iso3} alt='image'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default PicCarousel
