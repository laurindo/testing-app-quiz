import React from 'react';
import Slider from "react-slick";
import Header from '../components/Header';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const renderImgs = () => {
  const imgs = [
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611516/odonto/p-anterior/Imagem1.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611515/odonto/p-anterior/Imagem2.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611516/odonto/p-anterior/Imagem3.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611517/odonto/p-anterior/Imagem4.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611516/odonto/p-anterior/Imagem5.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611517/odonto/p-anterior/Imagem6.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611517/odonto/p-anterior/Imagem7.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611517/odonto/p-anterior/Imagem8.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611521/odonto/p-anterior/Imagem9.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611518/odonto/p-anterior/Imagem10.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611523/odonto/p-anterior/Imagem11.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611524/odonto/p-anterior/Imagem12.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611524/odonto/p-anterior/Imagem13.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611526/odonto/p-anterior/Imagem14.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611527/odonto/p-anterior/Imagem15.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611527/odonto/p-anterior/Imagem16.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611529/odonto/p-anterior/Imagem17.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611530/odonto/p-anterior/Imagem18.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611530/odonto/p-anterior/Imagem19.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/v1559611531/odonto/p-anterior/Imagem20.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559611554/odonto/p-anterior/Imagem21.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559611563/odonto/p-anterior/Imagem22.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559611564/odonto/p-anterior/Imagem23.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559611547/odonto/p-anterior/Imagem24.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559611544/odonto/p-anterior/Imagem25.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559611548/odonto/p-anterior/Imagem26.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559611543/odonto/p-anterior/Imagem27.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559611550/odonto/p-anterior/Imagem28.jpg',
  ];
  return imgs.map((img, index) => {
    return (
      <div key={ index }>
        <img src={ img } />
      </div>
    );
  });
};

const PreparoAnterior = () => (
  <div>
    <Header />
    <div className="content">
      <h2 style={{ 'text-align': 'center', 'font-size': '24px' }}>Preparo Anterior</h2>

      <div className="container2">
        <Slider {...settings}>
          { renderImgs() }
        </Slider>
      </div>

    </div>
  </div>
);

export default PreparoAnterior;
