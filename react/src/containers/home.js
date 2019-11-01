import React from 'react';
import axios from 'axios';
import ProductList from './product-list';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productList: {} };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost/api/products',
    }).then((response) => {
      //   console.log(response);

      this.setState({ productList: response.data.data });
    });
  }

  render() {
    const renderProductList = () => {
      if (this.state.productList.length > 0) {
        return <ProductList list={this.state.productList} />;
      }
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center" />
          {renderProductList()}
          <p> Nombre de produits dans le panier : </p>
        </div>
      </div>
    );
  }
}

export default Home;
