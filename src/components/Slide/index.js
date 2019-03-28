import React from "react";
import Slider from "react-slick";
import './slide.css';

class Slide extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container2">
        <Slider {...settings}>
          <div>
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1553786617/odonto/toothpaste-3067569_960_720.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1553718973/odonto/especialidades.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1553718973/odonto/endodontia--posunip_10368.jpg" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1553718973/odonto/especialidades.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
