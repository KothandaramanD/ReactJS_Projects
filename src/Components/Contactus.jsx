import React, { useState } from 'react';

const Contactus = () => {

const [userName, setUserName] = useState('');
const [mobileNo, setMobileNo] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  setShowAlert1(true);
}; //contact message alerts

const [showAlert1, setShowAlert1] = useState(false); // contact message submit successfully alerts


  return (
    <div className="contact" id='contactus'>
    <hr className='rule1'/>
    <h2>Contact Us</h2>
    <p>We are always with you, any queries please send your details, if any questions please type your messages.</p>
    <div className="contact-form">
<h2>Contact</h2>
<form onSubmit={handleSubmit}>
<div className="form-group1">
  <label>User Name</label>
  <input
    type="text"
    className='textarea1'
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
    required
  />
</div>
<div className="form-group1">
  <label>Mobile No.</label>
  <input
    type="text"
    className='textarea1'
    value={mobileNo}
    onChange={(e) => setMobileNo(e.target.value)}
    required
  />
</div>
<div className="form-group1">
  <label>Subject</label>
  <input
    type="text"
    className='textarea1'
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
    required
  />
</div>
<div className="form-group1">
  <label>Message</label>
  <textarea
    value={message}
    className='textarea2'
    onChange={(e) => setMessage(e.target.value)}
    required
  ></textarea>
</div>
<button type="submit" className='submit1'>Send</button>
</form>
{showAlert1 && (
<div className="modal1">
  <div className="modal-content1">
    <span className="close" onClick={() => setShowAlert1(false)}>
      &times;
    </span>
    <h2>Message sent successfully!</h2>
    <p>User Name: {userName}</p>
    <p>Mobile No: {mobileNo}</p>
    <p>Subject: {subject}</p>
    <p>Message: {message}</p>
  </div>
</div>
)}
</div>
</div>

  );
};


export default Contactus;
