import React from 'react';

const ToggleCart = ({ totalProductCount, toggleCart }) => {
  return (
    <div className="cart-logo" onClick={toggleCart}>
      🛒
      <div className="cart-notification">{totalProductCount}</div>
    </div>
  );
};

export default ToggleCart;