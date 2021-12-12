import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProductItem = () => {
    return this.props.productsData.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem
            xemChiTiet={this.props.xemChiTiet}
            item={product}
          ></ProductItem>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProductItem()}</div>
      </div>
    );
  }
}
