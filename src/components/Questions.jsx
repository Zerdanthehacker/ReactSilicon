import React, { useState, useEffect } from 'react';
import axios from 'axios';
import telefonImg from '../assets/images/telefon.svg';
import messageImg from '../assets/images/message.svg';
import faqArrow from '../assets/images/faq-arrow.svg';
import './DarkModeToggle.jsx';

const Questionair = ({ isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    axios.get('https://win24-assignment.azurewebsites.net/api/faq')
      .then((response) => {
        setFaqData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
      });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className={`questions ${isDarkMode ? 'dark-background' : 'light-background'}`}>
        <div className="container">
          <div className="questions-page">
            <div className="faq">
              <h2 className={isDarkMode ? 'white-text' : 'dark-text'}>Any questions? <br /> Check out the FAQs</h2>
              <p className={isDarkMode ? 'white-text' : 'dark-text'}>
                Still have unanswered questions and need to get <br /> in touch?
              </p>
            </div>
            <div className="box">
              <div className={`question-box ${isDarkMode ? 'dark-box' : 'light-box'}`}>
                <img src={telefonImg} alt="Phone" />
                <p className={isDarkMode ? 'white-text' : 'dark-text'}>Still have questions?</p>
                <button className={`contact-button ${isDarkMode ? 'dark-button white-text' : 'light-button dark-text'}`}>
                  Contact us <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className={`question-box-2 ${isDarkMode ? 'dark-box' : 'light-box'}`}>
                <img src={messageImg} alt="Message" />
                <p className={isDarkMode ? 'white-text' : 'dark-text'}>Still have questions?</p>
                <button className={`contact-button ${isDarkMode ? 'dark-button white-text' : 'light-button dark-text'}`}>
                  Contact us <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`FAQ ${isDarkMode ? 'dark-background' : 'light-background'}`}>
        {faqData.map((faq, index) => (
          <nav key={faq.id} className={`faq-box ${isDarkMode ? 'dark-box' : 'light-box'}`}>
            <div className={`faq-${index + 1}`} onClick={() => toggleAccordion(index)}>
              <div>
                <h3 className={isDarkMode ? 'white-text' : 'dark-text'}>
                  {faq.title} <img src={faqArrow} alt="Toggle FAQ" />
                </h3>
              </div>
              {activeIndex === index && (
                <div className={`faq-content ${isDarkMode ? 'white-text' : 'dark-text'}`}>
                  <p>{faq.content}</p>
                </div>
              )}
            </div>
          </nav>
        ))}
      </div>
    </>
  );
};

export default Questionair;
