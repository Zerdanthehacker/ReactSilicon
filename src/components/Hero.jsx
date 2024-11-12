import React from 'react';
import appStoreImage from '../assets/images/btn-appstore.svg';
import googlePlayImage from '../assets/images/btn-googleplay.svg';
import iphoneMyBudget from '../assets/images/iphone-mybudget_desktop.svg';
import iphoneCard from '../assets/images/iphone-card_desktop.svg';

const Hero = ({ isDarkMode }) => {
  return (
    <section id="hero" className={isDarkMode ? 'dark' : 'hero-dark'}>
      <div className="container">
        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="content">
          <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
          <div className="buttons">
            <a className="btn-app" href="#"><img src={appStoreImage} alt="App Store" /></a>
            <a className="btn-app" href="#"><img src={googlePlayImage} alt="Google Play" /></a>
          </div>

          <a href="#" className="discover-more">
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <div className='discover-more-p'>
            <span>Discover more</span>
            </div>
          </a>
        </div>

        <div className="images">
          <img className="img-back" src={iphoneMyBudget} alt="iPhone My Budget" />
          <img className="img-front" src={iphoneCard} alt="iPhone My Cards" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
