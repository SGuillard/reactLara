import React from 'react';
import { connect } from 'react-redux';

const CartListItem = (props) => {
  const { product } = props;
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-sm-3">
          <p className="font-weight-bold">{product.product.name}</p>
        </div>
        <div className="col-md-3">{product.product.price}&#36;</div>
        <div className="col-sm-1">{product.quantity}</div>
        <div className="col-sm-1">
          {product.product.price * product.quantity}&#36;
        </div>
        <div className="col-sm-4">
          <div
            className="btn btn-danger"
            role="button"
            onClick={props.removeProduct}
          >
            Remove
          </div>
        </div>
      </div>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  removeProduct: () => dispatch({ type: 'REMOVE_PRODUCT' }),
});
// export default ProductListItem;
export default connect(
  null,
  mapDispatchToProps,
)(CartListItem);
