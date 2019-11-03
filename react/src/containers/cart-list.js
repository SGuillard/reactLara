import React from 'react';
import CartListItem from '../components/cart-list-item';

const CartList = ({ list }) => {
  const getProductListItem = () => list.map(cart => <CartListItem key={cart.id} product={cart} />);

  return (
    <div className="col-lg-6">
      <h4>Cart List</h4>
      <ul className="list-group">{getProductListItem()}</ul>
    </div>
  );
};

export default CartList;
