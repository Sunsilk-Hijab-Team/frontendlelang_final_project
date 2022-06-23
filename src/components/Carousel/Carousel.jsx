import Carousel from 'react-bootstrap/Carousel';
// import Image from './img_banner.png';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/img_banner.png"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/img_banner.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;