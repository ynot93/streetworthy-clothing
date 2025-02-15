// components/Hero.js
import React from 'react';
import logo from '../assets/logo.png';
import heroImage from '../assets/hero-image.png';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <img src={logo} alt="Logo" className="hero-logo" />
      <div className="hero-text">
        <h1>Streetworthy Clothing</h1>
        <p>Your go-to source for stylish and comfortable hoodies.</p>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </div>
  </section>
);

export default Hero;