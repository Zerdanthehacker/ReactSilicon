import React from 'react';
import transactionImg1 from '../assets/images/transaction-iphone-1.svg';
import transactionImg2 from '../assets/images/transactionIMG-2.svg';
import transactionImg3 from '../assets/images/transactionIMG-3.svg';

const Transactions = ({ isDarkMode }) => {
  return (
    <section className={`transaction ${isDarkMode ? 'transaction-light' : 'transaction-dark'}`}>
      <div className="transaction-header">
        <h1>How does it work?</h1>
      </div>

      <div className="transaction-img">
        <div className="transactions">
          <img
            src={transactionImg1}
            alt="Transaction 1"
            className={isDarkMode ? 'dark-image' : 'light-image'}
          />
          <img
            src={transactionImg2}
            alt="Transaction 2"
            className={isDarkMode ? 'dark-image' : 'light-image'}
          />
          <img
            src={transactionImg3}
            alt="Transaction 3"
            className={isDarkMode ? 'dark-image' : 'light-image'}
          />
        </div>
      </div>

      <div className="transaction-h4">
        <h4>Latest transaction history</h4>
        <p>
          Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique <br /> quisque hac in
          consectetur condimentum.
        </p>
      </div>
    </section>
  );
};

export default Transactions;
