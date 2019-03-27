import React from 'react';
import { Redirect } from 'react-router-dom';

class SplashScreen extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    anime.timeline({ loop: false })
      .add({
        targets: '.ml8 .circle-white',
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100
      }).add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: '-=1000'
      }).add({
        targets: '.ml8 .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: '-=600'
      }).add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550'
      }).add({
        targets: '.ml8 .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000'
      }).add({
        targets: '.ml8',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1400
      });

      anime({
        targets: '.ml8 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
      });

      this.goRedirect();
  }

  goRedirect() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 5000);
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/home'/>;
    }

    return (
      <div>
        <h1 className="ml8">
          <span className="letters-container">
            <span className="letters letters-left">Odonto App</span>
            <span className="letters bang">&nbsp;<img src="https://res.cloudinary.com/luneswallet/image/upload/c_thumb,w_50,g_face/v1553708640/teeth_o6qqgq.png" /></span>
          </span>
          <span className="circle circle-white"></span>
          <span className="circle circle-dark"></span>
          <span className="circle circle-container"><span className="circle circle-dark-dashed"></span></span>
        </h1>
      </div>
    );
  }
}

export default SplashScreen;
