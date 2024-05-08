import React from 'react';
import homelogo from './Images/homelogo.jpg';
import googleplay from '../images/googleplay.png';
import applestore from '../images/applestore.png';
import './Body.css';

const Home = () => {
  return (
    <div id="home" className="home-section">
      <div className="left-section">
      <img src={homelogo} alt="Image" className='homelogo'/>
      </div>
      <div className="right-section">
        <h2>Welcome Healthy Food</h2><br/>
        <p>Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit eget libero vestibulum faucibus vitae in velit.</p>
        <div className='googlea'><img src={googleplay} alt="Image"/><img src={applestore} alt="Image"/></div>
      </div>
      </div>
      
  );
};

export default Home;
