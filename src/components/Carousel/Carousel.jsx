import Carousel from 'react-bootstrap/Carousel';
import Image from './img_banner.png';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;