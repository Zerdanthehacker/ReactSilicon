import React from 'react';
import './DarkModeToggle.jsx';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="darkmode-container">
      <span className="label">Dark Mode</span>
      <label className="toggle-switch switch">
        <input
          id="darkmode-switch"
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
