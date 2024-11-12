import React from 'react';
import mobileFeatures from '../assets/images/mobil-features.svg';
import featureIcon1 from '../assets/images/Features Icon-1.svg';
import featureIcon2 from '../assets/images/Features Icon-2.svg';
import featureIcon3 from '../assets/images/Features Icon-3.svg';
import featureIcon4 from '../assets/images/Features Icon-4.svg';
import featureIcon5 from '../assets/images/Features Icon-5.svg';
import featureIcon6 from '../assets/images/Features Icon-6.svg';
import './DarkModeToggle.jsx';

const Features = ({ isDarkMode }) => {
  return (
    <section id='features' className={isDarkMode ? 'dark-background' : ''}>
      <div className={`features-section ${isDarkMode ? 'dark-background' : ''}`}>
        <div className={`features-container ${isDarkMode ? 'dark-background' : ''}`}>
          <div className="mobile-features">
            <img src={mobileFeatures} alt="mobil-features" className={isDarkMode ? 'dark-image' : ''} />
          </div>
          <div>
            <div className="features-rubrik">
              <h1 className={isDarkMode ? 'white-text' : ''}>App Features</h1>
              <div className="features-description">
                <p className={isDarkMode ? 'white-text' : ''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam <br /> luctus facilisis ultrices. Pellentesque volutpat ligula est, mattis fermentum nec lacus.</p>
              </div>
            </div>
            <div className="features-list">
              <div className="feature-item">
                <img className={`logos ${isDarkMode ? 'dark-image' : ''}`} src={featureIcon1} alt="Logo-1" />
                <div className="feature-content">
                  <h3 className={isDarkMode ? 'white-text' : ''}>Easy Payments</h3>
                  <p className={isDarkMode ? 'white-text' : ''}>Id mollis consectetur congue <br /> egestas, suspendisse <br /> blandit justo.</p>
                </div>
              </div>
              <div className="feature-item">
                <img className={`logos ${isDarkMode ? 'dark-image' : ''}`} src={featureIcon2} alt="Logo-2" />
                <div className="feature-content">
                  <h3 className={isDarkMode ? 'white-text' : ''}>Data Security</h3>
                  <p className={isDarkMode ? 'white-text' : ''}>Augue pulvinar justo, fermentum <br /> fames aliquam accumsan <br /> vestibulum non.</p>
                </div>
              </div>
              <div className="feature-item">
                <img className={`logos ${isDarkMode ? 'dark-image' : ''}`} src={featureIcon3} alt="Logo-3" />
                <div className="feature-content">
                  <h3 className={isDarkMode ? 'white-text' : ''}>Cost Statistics</h3>
                  <p className={isDarkMode ? 'white-text' : ''}>Mattis urna ultricies non amet, <br /> purus in auctor non. Odio vulputate <br /> ac nibh.</p>
                </div>
              </div>
              <div className="feature-item">
                <img className={`logos ${isDarkMode ? 'dark-image' : ''}`} src={featureIcon4} alt="Logo-4" />
                <div className="feature-content">
                  <h3 className={isDarkMode ? 'white-text' : ''}>Support 24/7</h3>
                  <p className={isDarkMode ? 'white-text' : ''}>A elementum, imperdiet enim, <br /> pretium etiam facilisi in aenean <br /> quam mauris.</p>
                </div>
              </div>
              <div className="feature-item">
                <img className={`logos ${isDarkMode ? 'dark-image' : ''}`} src={featureIcon5} alt="Logo-5" />
                <div className="feature-content">
                  <h3 className={isDarkMode ? 'white-text' : ''}>Regular Cashback</h3>
                  <p className={isDarkMode ? 'white-text' : ''}>Sit facilisis dolor arcu, fermentum <br /> vestibulum arcu elementum <br /> imperdiet eleifend.</p>
                </div>
              </div>
              <div className="feature-item">
                <img className={`logos ${isDarkMode ? 'dark-image' : ''}`} src={featureIcon6} alt="Logo-6" />
                <div className="feature-content">
                  <h3 className={isDarkMode ? 'white-text' : ''}>Top Standards</h3>
                  <p className={isDarkMode ? 'white-text' : ''}>Faucibus cursus maecenas lorem <br /> cursus nibh. Sociis sit risus id. Sit <br /> facilisis dolor arcu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
