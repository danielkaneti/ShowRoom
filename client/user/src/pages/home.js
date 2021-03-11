import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {

    return(
        <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
        <Carousel.Caption >
          <h3>Welcome to Show Room</h3>
      <p>Here you will find ths best wine in israel .</p>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src={image1} 
            style={{ height: "740px" }}
            alt="Welcome to Show Room" 
          />
      
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={image2}
            style={{ height: "740px" }}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3>Welcome to Show Room</h3>
      <p>Here you will find ths best wine in israel .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={image3}
            style={{ height: "740px" }}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3>Welcome to Show Room</h3>
      <p>Here you will find ths best wine in israel .</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Home;