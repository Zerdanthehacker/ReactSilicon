import React from 'react';
import Recensionimage from '../assets/images/Recension-1.svg';
import Recensionimages from '../assets/images/Recension-2.svg';

const ReviewSection = ({ isDarkMode }) => {
  return (
    <section className={`review ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="review-container">
        <div className="review-header">
          <h1>Clients Are <br /> Loving Our App</h1>
        </div>
        <div className="reviews">
          <img src={Recensionimage} alt="Review 1" />
          <img src={Recensionimages} alt="Review 2" />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
