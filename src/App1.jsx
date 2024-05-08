import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Ourservices from './Components/Ourservices';
import Contactus from './Components/Contactus';
import Faqs from './Components/Faqs';
import Navigation from './Components/Navigation';
import ProductDetailsPage from './Components/ProductDetailsPage';
import Categories from './Components/Categories';
import './Components/Body.css';
import './App.css';
import shoppingcart from './images/shopping-cart.png';


const App1 = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [showAlert, setShowAlert] = useState(false); // when i click the products prodcuts added in the cart message alert

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(prevCartItems =>
                prevCartItems.map(item =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                )
            );
        } else {
            setCartItems(prevCartItems => [...prevCartItems, { ...product, count: 1 }]);
        }
        setShowAlert(true);
    };

    const removeFromCart = (productId) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== productId));
    };

    const increaseCount = (productId) => {
        setCartItems(prevCartItems =>
            prevCartItems.map(item =>
                item.id === productId ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const decreaseCount = (productId) => {
        setCartItems(prevCartItems =>
            prevCartItems.map(item =>
                item.id === productId && item.count > 0 ? { ...item, count: item.count - 1 } : item
            )
        );
    };

    const toggleCart = () => {
        setIsCartOpen(prevState => !prevState);
      };
      const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.count), 0).toFixed(2);
      };
      useEffect(() => {
        let timeout;
        if (showAlert) {
          timeout = setTimeout(() => {
            setShowAlert(false);
          }, 1000);  //timer set closing the alerts
        }
        return () => clearTimeout(timeout);
      }, [showAlert]);
    
    const [showCategories, setShowCategories] = useState(true);
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Hide categories when navigating to product details page
    React.useEffect(() => {
        setShowCategories(!location.pathname.includes('/product'));
    }, [location.pathname]);

    return (
        <div>
            <Header />
            <Navigation scrollToSection={scrollToSection} toggleCart={toggleCart} cartItems={cartItems} />
            {showCategories && (
                <>
                <div id="home">
                <Home />
                </div>
                    <div id="categories">
                        <Categories
                            addToCart={addToCart}
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            increaseCount={increaseCount}
                            decreaseCount={decreaseCount}
                        />
                        {showAlert && (
  <div className="alertadd">
    Product added to cart!
  </div>
)}
                    </div>
                    <div id="aboutus">
                        <Aboutus />
                    </div>
                    <div id="ourservices">
                        <Ourservices />
                    </div>
                    <div id="contactus">
                        <Contactus />
                    </div>
                    <div id="faqs">
                        <Faqs />
                    </div>
                </>
            )}
            <Routes>
                <Route path="/product/:id" element={<ProductDetailsPage addToCart={addToCart} />} />
            </Routes>
            <Footer />
            {/* Cart Sidebar */}

            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
  <div className="cart-sidebar-header">
  <img src={shoppingcart} className='shoplogo'/>
    <h3>Cart</h3>
    <button className="close-cart" onClick={toggleCart}>X</button>
  </div>
  <div className="cart-sidebar-content">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td className='cartdi'>
              <button onClick={() => decreaseCount(item.id)}>-</button>
              <label>{item.count}</label>
              <button onClick={() => increaseCount(item.id)}>+</button>
            </td>
            <td className='cartdi1'><button onClick={() => removeFromCart(item.id)}>🗑️</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="total-amount">Total: ${calculateTotalAmount()}</div>
    </div>
          </div>

    </div>

    );
};

export default App1;
