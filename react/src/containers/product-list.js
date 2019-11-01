import React from 'react';
import axios from 'axios';

class ProductList extends React.Component {
  constructor(props) {
    console.log(props);

    super(props);
  }

  render() {
    return this.props.list.map(product => <div>{product.name}</div>);
    // return 'ok';
    // return <p>{this.state.productList.data.data[0].name}</p>;
  }
}

export default ProductList;
