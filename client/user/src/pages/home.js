import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';

const options = {
  type: 'loop',
  gap: '1rem',
  drag: true,
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  resetProgress: false,
  arrows: 'slider',
};

const Home = () => {


    return(
      <Splide options={ options }>
      <SplideSlide   >
       
        <img src={image2} alt="Image 1" />
    
      </SplideSlide>
      <SplideSlide >
        <img src={image1} alt="Image 2"/>
      </SplideSlide>
      <SplideSlide >
        <img src={image3} alt="Image 2"/>
      </SplideSlide>
      <SplideSlide >
        <img src={image4} alt="Image 2"/>
      </SplideSlide>
    </Splide>
    );
}

export default Home;