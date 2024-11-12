import React from 'react';
import simpleTransferBotImg from '../assets/images/simple-transfer bot img.svg';
import featureIcon1 from '../assets/images/Features Icon-1.svg';
import featureIcon5 from '../assets/images/Features Icon-5.svg';
import simpleTransferBtn from '../assets/images/simple-transfer btn.svg';
import './DarkModeToggle.jsx';

const ReceivePayments = ({ isDarkMode }) => {
  return (
    <section className={`receive-payments ${isDarkMode ? 'dark-background' : 'light-background'}`}>
      <div className={`container ${isDarkMode ? 'dark-container' : 'light-container'}`}>

        <div className='recieve-payment-container'>

        
          <div className="simple-transfer-img-bot">
            <img src={simpleTransferBotImg} alt="Simple Transfer Bottom" className={isDarkMode ? 'dark-image' : 'light-image'} />
          </div>

          <div className="receive-payments-text">
            <div className="receive-payments-header">
              <h2 className={isDarkMode ? 'white-text' : 'dark-text'}>
                Receive payment from <br /> international bank details
              </h2>
            </div>

            <div className="receiver-container">
              <div className="receiver">
                <img src={featureIcon1} alt="Feature Icon 1" className={isDarkMode ? 'dark-image' : 'light-image'} />
                <p className={isDarkMode ? 'white-text' : 'dark-text'}>Manage your payments online.  Mollis congue egestas <br /> egestas fermentum fames.</p>
              </div>
              <div className="receiver">
                <img src={featureIcon5} alt="Feature Icon 5" className={isDarkMode ? 'dark-image' : 'light-image'} />
                <p className={isDarkMode ? 'white-text' : 'dark-text'}>A elementur and imperdiet enim,  pretium etiam facilisi aenean <br /> quam mauris.</p>
              </div>
            </div>

            <div className="simple-btn-2">
              <img src={simpleTransferBtn} alt="simple-transfer" className={isDarkMode ? 'dark-image' : 'light-image'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceivePayments;
