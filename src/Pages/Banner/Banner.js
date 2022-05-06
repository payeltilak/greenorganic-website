import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
    
    return (
        <div className='pt-4 mx-auto container'>
              <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="
          https://i.ibb.co/jVbXH1C/Banner-10.webp"
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/18HJh56/Banner-5.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="
          https://i.ibb.co/CB4x2xB/Banner-9.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;