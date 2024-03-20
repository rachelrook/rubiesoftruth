import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import './Navbar.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/pink-clouds.mp4' autoPlay loop muted fixed />
      <h1>Charm is deceptive, and beauty is fleeting; </h1>
      <p className='center'>but a woman who fears the Lord is to be praised.</p><br></br>
      <div className='center'>
      <Link to="/">
        <img className='circle-me' src='/images/rubyruth.jpg' alt="Rachel Headshot"/>
        </Link>
      </div>
    
    </div>
  );
}

export default HeroSection;