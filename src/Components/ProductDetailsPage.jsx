/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from './Products';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        const resp = await fetch(`{products}/${productId}`); // Corrected URL
        const jsonData = await resp.json();
        setProduct(jsonData.data); 
    };

    fetchData();
  }, [productId, products]); // Adding 'products' to dependencies array

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
*/
// ProductDetailsPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from './Products';
import './Body.css';

const ProductDetailsPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);


  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 1000);  //timer set closing the alerts
    }
    return () => clearTimeout(timeout);
  }, [showAlert]);


  // Fetch the product details based on the id
  useEffect(() => {
    const fetchedProduct = products.find(item => item.id === parseInt(id));
    setProduct(fetchedProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) { // Check if product exists
      addToCart(product); // Pass the product to addToCart function
      setShowAlert(true);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='ppcolor'>
      <hr className='rule1'/>
      <div className="product-details-alert1">
      {showAlert && (
  <div className="alertadd">
    Product added to cart!
  </div>
)}
        <div className="product-details-left">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="product-details-right">
          <p><strong>Description:</strong> {product.description}</p>
          <p>Rating: {getStarRating(product.rating)}</p>
          <div>
            <table className="styled-table">
              <tbody>
                <tr className='tablecolorset1'>
                  <td>Availability</td>
                  <td>Seller</td>
                  <td>Category</td>
                </tr>
                <tr className='tablecolorset'>
                  <td>{product.availability}</td>
                  <td>{product.seller}</td>
                  <td>{product.category}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const getStarRating = (rating) => {
  let stars = '';
  for (let i = 0; i < rating; i++) {
    stars += '⭐'; // Unicode character for star
  }
  return stars;
};

export default ProductDetailsPage;
