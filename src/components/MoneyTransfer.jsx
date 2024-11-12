import React from 'react';
import simpleTransferBtn from '../assets/images/simple-transfer btn.svg';
import simpleTransferTopImg from '../assets/images/simple-transfer top img.svg';
import './DarkModeToggle.jsx';

const MoneyTransfer = ({ isDarkMode }) => {
  return (
    <section className={`money-transfer ${isDarkMode ? 'dark-background' : 'light-background'}`}>
      <div className={`container ${isDarkMode ? 'dark-container' : 'light-container'}`}>
        <div className={`simple-transfer ${isDarkMode ? 'dark-simple-transfer' : 'light-simple-transfer'}`}>

          <div className="simple-transfer-text">
            <h2 className={isDarkMode ? 'white-text' : 'dark-text'}>Make your money transfer simple and clear</h2>

            <div className={`checkmark-text ${isDarkMode ? 'dark-checkmark-text' : 'light-checkmark-text'}`}>
              <i className="fa-solid fa-circle-check"></i>
              <p className={isDarkMode ? 'white-text' : 'dark-text'}>Banking transactions are free for you</p>
            </div>

            <div className={`checkmark-text ${isDarkMode ? 'dark-checkmark-text' : 'light-checkmark-text'}`}>
              <i className="fa-solid fa-circle-check"></i>
              <p className={isDarkMode ? 'white-text' : 'dark-text'}>No monthly cash commission</p>
            </div>

            <div className={`checkmark-text ${isDarkMode ? 'dark-checkmark-text' : 'light-checkmark-text'}`}>
              <i className="fa-solid fa-circle-check"></i>
              <p className={isDarkMode ? 'white-text' : 'dark-text'}>Manage payments and transactions online</p>
            </div>

            <div className="simple-btn">
              <img src={simpleTransferBtn} alt="simple-transfer" className={isDarkMode ? 'dark-image' : 'light-image'} />
            </div>
          </div>

          <div className="simple-transfer-img">
            <img src={simpleTransferTopImg} alt="Money Transfer" className={isDarkMode ? 'dark-image' : 'light-image'} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MoneyTransfer;
