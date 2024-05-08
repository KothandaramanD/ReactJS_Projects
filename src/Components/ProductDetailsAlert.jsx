import React from 'react';
//pop up the prodcut when click the perticular products


const ProductDetailsAlert = ({ product, onClose, onAddToCart }) => {
    return (
      <div className="product-details-alert">
        <div className="product-details-left">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
        <div className="product-details-right">
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Rating:</strong> {product.rating}/5</p>
          <div>
            <table class="styled-table">
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
            </table>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    );
  };

export default ProductDetailsAlert;
