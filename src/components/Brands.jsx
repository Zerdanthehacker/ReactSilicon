import React from 'react';
import brand1 from '../assets/images/images/Brand 1.svg';
import brand2 from '../assets/images/images/Brand 2.svg';
import brand3 from '../assets/images/images/Brand 3.svg';
import brand4 from '../assets/images/images/Brand 4.svg';
import brand5 from '../assets/images/images/Brand 5.svg';
import brand6 from '../assets/images/images/Brand 6.svg';
import './DarkModeToggle.jsx';

const Brands = ({ isDarkMode }) => {
  console.log("Rendering Brands component");

  return (
    <section className={`brands ${isDarkMode ? 'dark-brands' : ''}`} id="brands">
      <div className={`container ${isDarkMode ? 'dark-container' : ''}`}>
        <div className={`brand-box ${isDarkMode ? 'dark-brand-box' : ''}`}>
          <img src={brand1} alt="Brand 1" />
        </div>
        <div className={`brand-box ${isDarkMode ? 'dark-brand-box' : ''}`}>
          <img src={brand2} alt="Brand 2" />
        </div>
        <div className={`brand-box ${isDarkMode ? 'dark-brand-box' : ''}`}>
          <img src={brand3} alt="Brand 3" />
        </div>
        <div className={`brand-box ${isDarkMode ? 'dark-brand-box' : ''}`}>
          <img src={brand4} alt="Brand 4" />
        </div>
        <div className={`brand-box ${isDarkMode ? 'dark-brand-box' : ''}`}>
          <img src={brand5} alt="Brand 5" />
        </div>
        <div className={`brand-box ${isDarkMode ? 'dark-brand-box' : ''}`}>
          <img src={brand6} alt="Brand 6" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
