import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // No need for BrowserRouter here
import './Body.css';
const Navigation = ({ cartItems = [], toggleCart }) => {

//register and login button
const [registering, setRegistering] = useState(false);
const [loggingIn, setLoggingIn] = useState(false);
const [registerData, setRegisterData] = useState({
  username: '',
  email: '',
  mobile: '',
  place: '',
  password: ''
});

const [loginData, setLoginData] = useState({
  username: '',
  password: ''
});

const handleRegister = () => {
  setRegistering(true);
};

const handleRegisterSubmit = (e) => {
  e.preventDefault();
  alert('Registered Successfully!\n\n' + JSON.stringify(registerData, null, 2));
  setRegistering(false);
};

const handleLogin = () => {
  setLoggingIn(true);
};

const handleLoginSubmit = (e) => {
  e.preventDefault();
  alert('Login Successfully!\n\n' + JSON.stringify(loginData, null, 2));
  setLoggingIn(false);
};


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/" onClick={() => scrollToSection('home')}>Home</Link>
        </li>
        <li>
          <Link to="/categories" onClick={() => scrollToSection('categories')}>Categories</Link>
        </li>
        <li>
          <Link to="/aboutus" onClick={() => scrollToSection('aboutus')}>About Us</Link>
        </li>
        <li>
          <Link to="/ourservices" onClick={() => scrollToSection('ourservices')}>Our Services</Link>
        </li>
        <li>
          <Link to="/contactus" onClick={() => scrollToSection('contactus')}>Contact Us</Link>
        </li>
        <li>
          <Link to="/faqs" onClick={() => scrollToSection('faqs')}>FAQs</Link>
        </li>
        <li>
        <div className="Applr">
                <div className='reglog'>
      <button onClick={handleRegister} className='buttonlr'>Register</button>
      <button onClick={handleLogin} className='buttonlr'>Login</button>
      </div>
      {registering && (
        <div className="modallr">
          <div className="modal-contentlr">
            <span className="close" onClick={() => setRegistering(false)}>
              &times;
            </span>
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className='reg1'>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                required
              />
              </div>
              <div className='reg1'>
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                required
              />
              </div>
              <div className='reg1'>
              <label>Mobile</label>
              <input
                type="text"
                placeholder="Mobile"
                value={registerData.mobile}
                onChange={(e) => setRegisterData({ ...registerData, mobile: e.target.value })}
                required
              />
              </div>
              <div className='reg1'>
              <label>Place</label>
              <input
                type="text"
                placeholder="Place"
                value={registerData.place}
                onChange={(e) => setRegisterData({ ...registerData, place: e.target.value })}
                required
              />
              </div>
              <div className='reg1'>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                required
              />
              </div>
              <div className='reg1'>
              <button type="submit" className='buttonlr1'>Register</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loggingIn && (
        <div className="modal-login">
          <div className="modal-content-login">
            <span className="close" onClick={() => setLoggingIn(false)}>
              &times;
            </span>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className='reg1'>
                <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                required
              />
              </div>
              <div className='reg1'>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
               </div>
              <div className='reg1'>
              <button type="submit" className='button-login'>Login</button>
              </div>
            </form>
          </div>
                    </div>

      )}
    </div>
              </li>
              <li>
              <div className="cart-logo" onClick={toggleCart}>
              🛒
              <div className="cart-notification">{cartItems.length}</div>
              </div>
              </li>

      </ul>
    </nav>
  );
};

export default Navigation;
