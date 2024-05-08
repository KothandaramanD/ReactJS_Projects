import React from 'react';
import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import service3 from '../images/service3.jpg';

const Ourservices = () => {
  return (
    <div id="services">
    <hr className='rule1'/>
    <h2 className='abouth'>Our Services</h2>
<div className="image-container">
<div className="image-wrapper">
<img src={service1} alt="Image 1" />
<div className="caption1">Delivery At Home</div>
</div>
<div className="image-wrapper">
<img src={service2} alt="Image 2" />
<div className="caption1">Whole Sales</div>
</div>
<div className="image-wrapper">
<img src={service3} alt="Image 3" />
<div className="caption1">Planning Party</div>
</div>
</div>
  </div>

  );
};

export default Ourservices;
