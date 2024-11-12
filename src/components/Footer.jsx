import React, { useState } from 'react';
import bellLogo from '../assets/images/Bell logo.svg';
import mailLogo from '../assets/images/Mail logo.svg';
import './DarkModeToggle.jsx';

const Footer = ({ isDarkMode }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const backgroundColor = '#0B0F19';
  const textColor = '#FFFFFF';

  // Funktion för att validera e-post och visa popup om giltig
  const handleSubscribe = () => {
    // Enkel e-postvalidering
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Ange en giltig e-postadress');
      return;
    }
    setError('');
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Stänger popup efter 2 sekunder
  };

  return (
    <div style={{ backgroundColor }} className="footer-wrapper">
      <div className="wrapper">
        <div className="bell">
          <img src={bellLogo} alt="Bell Logo" />
          <h2 style={{ color: textColor }}>
            Subscribe to our newsletter to stay <br /> informed about the latest updates
          </h2>
        </div>

        <div className="input-group">
          <img className="icon" src={mailLogo} alt="Mail Logo" />
          <input 
            className="form-input" 
            type="text" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Uppdaterar e-post vid inmatning
            style={{ backgroundColor, color: textColor, border: '1px solid #FFFFFF' }}
          />
          <button 
            className="btn"
            style={{ backgroundColor, color: textColor, border: '1px solid #FFFFFF' }}
            onClick={handleSubscribe} // Kallar funktionen vid klick
          >
            Subscribe
          </button>
        </div>

        {/* Felmeddelande för ogiltig e-post */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Popup-ruta */}
        {showPopup && (
          <div className="popup">
            <h1>Thanks for Subscribing!</h1>
            <p>You are now subscribed to our Newsletter!</p>
          </div>
        )}
      </div>
      <footer style={{ backgroundColor }}>
        <div className="container">
          <div>
            <p style={{ color: textColor }}>
              © 2024 Silicon. All rights reserved.
            </p>
            <p style={{ color: textColor }}>
              Credit MadrasThemes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
