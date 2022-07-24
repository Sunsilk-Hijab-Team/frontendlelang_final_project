import Carousel from 'react-bootstrap/Carousel';
import Image from './img_banner.png';
import style from './style.module.css'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item className={style.carousel}>
        <img
          className="d-block w-100"
          src={Image}
          alt="First slide"
        />
        <Carousel.Caption className={style.overlay}>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default UncontrolledExample;