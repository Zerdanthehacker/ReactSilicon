import React, { useState } from 'react';
import './assets/css/style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Features from './components/Features';
import Transactions from './components/Transactions';
import MoneyTransfer from './components/MoneyTransfer';
import ReceivePayments from './components/ReceivePayments';
import Reviews from './components/Reviews';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Optional: add dark mode toggle

  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Transactions />
      <MoneyTransfer />
      <ReceivePayments />
      <Reviews />
      <Questions />
      <Footer /> 
    </>
  );
}

export default App;
