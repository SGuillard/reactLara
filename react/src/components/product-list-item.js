import React from 'react';
import { connect } from 'react-redux';

class ProductListItem extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-md-4">
            <p className="font-weight-bold">{product.name}</p>
          </div>
          <div className="col-md-4">{product.price}&#36;</div>
          <div className="col-md-4">
            <div
              className="btn btn-primary"
              onClick={this.props.addProduct}
              role="button"
            >
              Add
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addProduct: () => dispatch({ type: 'ADD_PRODUCT' }),
});
// export default ProductListItem;
export default connect(
  null,
  mapDispatchToProps,
)(ProductListItem);
