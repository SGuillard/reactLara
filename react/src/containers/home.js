import React from 'react';
import axios from 'axios';
import ProductList from './product-list';
import CartList from './cart-list';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productList: {}, cartList: {} };
  }

  componentDidMount() {
    this.getProductList();
    this.getCartList();
  }

  getProductList() {
    axios({
      method: 'get',
      url: 'http://localhost/api/products',
    }).then((response) => {
      this.setState({ productList: response.data.data });
    });
  }

  getCartList() {
    axios({
      method: 'get',
      url: 'http://localhost/api/carts',
    }).then((response) => {
      this.setState({ cartList: response.data.data });
    });
  }

  render() {
    const { productList, cartList } = this.state;

    const renderProductList = () => {
      if (productList.length > 0) {
        return <ProductList list={productList} />;
      }
      return '';
    };

    const renderCartList = () => {
      if (cartList.length > 0) {
        return <CartList list={cartList} />;
      }
      return '';
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="row">
              {renderProductList()}
              {renderCartList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
