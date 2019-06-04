import React from 'react';
import Slider from "react-slick";
import Header from '../components/Header';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const renderImgs = () => {
  const imgs = [
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613024/odonto/p-posterior/DSC_7459.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613025/odonto/p-posterior/DSC_7460.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613040/odonto/p-posterior/DSC_7461.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613028/odonto/p-posterior/DSC_7462.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613033/odonto/p-posterior/DSC_7465.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613060/odonto/p-posterior/DSC_7466.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613052/odonto/p-posterior/DSC_7467.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613034/odonto/p-posterior/DSC_7468.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613063/odonto/p-posterior/DSC_7469.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613049/odonto/p-posterior/DSC_7470.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613058/odonto/p-posterior/DSC_7471.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559613078/odonto/p-posterior/DSC_7472.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614501/odonto/p-posterior/pt2/DSC_7473.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614511/odonto/p-posterior/pt2/DSC_7475.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614503/odonto/p-posterior/pt2/DSC_7476.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614507/odonto/p-posterior/pt2/DSC_7477.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614501/odonto/p-posterior/pt2/DSC_7478.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614501/odonto/p-posterior/pt2/DSC_7479.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614527/odonto/p-posterior/pt2/DSC_7480.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614530/odonto/p-posterior/pt2/DSC_7481.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614529/odonto/p-posterior/pt2/DSC_7482.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614524/odonto/p-posterior/pt2/DSC_7483.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614539/odonto/p-posterior/pt2/DSC_7484.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559614536/odonto/p-posterior/pt2/DSC_7485.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615125/odonto/p-posterior/pt3/DSC_7486.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615126/odonto/p-posterior/pt3/DSC_7487.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615122/odonto/p-posterior/pt3/DSC_7488.jpg',

    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615125/odonto/p-posterior/pt3/DSC_7493.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615138/odonto/p-posterior/pt3/DSC_7494.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615127/odonto/p-posterior/pt3/DSC_7495.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615141/odonto/p-posterior/pt3/DSC_7496.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615132/odonto/p-posterior/pt3/DSC_7497.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615146/odonto/p-posterior/pt3/DSC_7498.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615144/odonto/p-posterior/pt3/DSC_7499.jpg',

    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615142/odonto/p-posterior/pt3/DSC_7500.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615151/odonto/p-posterior/pt3/DSC_7501.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615488/odonto/p-posterior/pt4/DSC_7502.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615488/odonto/p-posterior/pt4/DSC_7503.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615485/odonto/p-posterior/pt4/DSC_7504.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615492/odonto/p-posterior/pt4/DSC_7505.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615485/odonto/p-posterior/pt4/DSC_7506.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615479/odonto/p-posterior/pt4/DSC_7507.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615513/odonto/p-posterior/pt4/DSC_7508.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615520/odonto/p-posterior/pt4/DSC_7509.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615524/odonto/p-posterior/pt4/DSC_7510.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615518/odonto/p-posterior/pt4/DSC_7511.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615527/odonto/p-posterior/pt4/DSC_7512.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559615550/odonto/p-posterior/pt4/DSC_7513.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616871/odonto/p-posterior/pt05/DSC_7514.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616865/odonto/p-posterior/pt05/DSC_7515.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616864/odonto/p-posterior/pt05/DSC_7518.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616865/odonto/p-posterior/pt05/DSC_7519.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616867/odonto/p-posterior/pt05/DSC_7520.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616866/odonto/p-posterior/pt05/DSC_7523.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616880/odonto/p-posterior/pt05/DSC_7524.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616883/odonto/p-posterior/pt05/DSC_7525.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616880/odonto/p-posterior/pt05/DSC_7526.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616880/odonto/p-posterior/pt05/DSC_7527.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616884/odonto/p-posterior/pt05/DSC_7528.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559616888/odonto/p-posterior/pt05/DSC_7529.jpg',

    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617133/odonto/p-posterior/pt6/DSC_7530.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617129/odonto/p-posterior/pt6/DSC_7531.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617127/odonto/p-posterior/pt6/DSC_7532.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617133/odonto/p-posterior/pt6/DSC_7533.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617128/odonto/p-posterior/pt6/DSC_7534.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617127/odonto/p-posterior/pt6/DSC_7535.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617148/odonto/p-posterior/pt6/DSC_7536.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617146/odonto/p-posterior/pt6/DSC_7537.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617146/odonto/p-posterior/pt6/DSC_7538.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617145/odonto/p-posterior/pt6/DSC_7539.jpg',

    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617153/odonto/p-posterior/pt6/DSC_7540.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617156/odonto/p-posterior/pt6/DSC_7541.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617391/odonto/p-posterior/pt7/DSC_7542.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617398/odonto/p-posterior/pt7/DSC_7543.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617396/odonto/p-posterior/pt7/DSC_7544.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617398/odonto/p-posterior/pt7/DSC_7545.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617393/odonto/p-posterior/pt7/DSC_7546.jpg',
    'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_719/v1559617396/odonto/p-posterior/pt7/DSC_7547.jpg',
  ];
  return imgs.map((img, index) => {
    return (
      <div key={ index }>
        <img src={ img } />
      </div>
    );
  });
};

const PreparoPosterior = () => (
  <div>
    <Header />
    <div className="content">
      <h2 style={{ 'text-align': 'center', 'font-size': '24px' }}>Preparo Posterior</h2>

      <div className="">
        <Slider {...settings}>
          { renderImgs() }
        </Slider>
      </div>

    </div>
  </div>
);

export default PreparoPosterior;
