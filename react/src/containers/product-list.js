import React from 'react';
import ProductListItem from '../components/product-list-item';

const ProductList = ({ list }) => {
  const getProductListItem = () => list.map(product => <ProductListItem key={product.id} product={product} />);

  return (
    <div className="col-lg-6">
      <h4>Product List</h4>
      <ul className="list-group">{getProductListItem()}</ul>
    </div>
  );
};

export default ProductList;
