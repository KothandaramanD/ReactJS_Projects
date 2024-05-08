// Footer.jsx
import React from 'react';
import './Footer.css'; // Importing the app.css stylesheet
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import whatsapp from '../images/whatsapp.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import location from '../images/location.png';
import call from '../images/call.png';

const Footer = () => {
  return (
    <footer>
      <div className="image-container1">
      <div className="image-wrapper1">
        <h2 className='followus'>Follow Us</h2>
        <div className="caption11">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={whatsapp} alt="whatsapp" />
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" /> 
        </div>
      </div>
      <div className="image-wrapper1">
      <h2 className='aboutus'>About Us</h2>
        <div className="caption12">Shop is a multipurpose Ecomerce Platform best suitable for all kinds of sectors like food. All type of food is avaible in this market, we provide best of the compare all websites and companies </div>
      </div>
      <div className="image-wrapper1">
      <div className="image-wrapper11">
      <h2 className='f1'>Find Us</h2>
      <div className="caption12"><div className="caption121"><img src={location} alt="location" /></div><div className="caption122">Time square, WRT Team Mirzapar Higway, Burj, Kutch, Gujarat - 370001</div></div>
      </div>
      <div className="image-wrapper12">
      <h2 className='f1'>Call Us</h2>
      <div className="caption13"><div className="caption121"><img src={call} alt="location" /></div><div className="caption123">1234567890</div></div>
      </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
