import React, { Component } from "react";
import { connect } from "react-redux";
import GioHangRedux from "./GioHangRedux";
import ProductListRedux from "./ProductListRedux";

class BaiTapGioHangRedux extends Component {
  renderSoLuong = () => {
    return this.props.gioHang.reduce((tongSoLuong, spGH, index) => {
      return (tongSoLuong += spGH.soLuong);
    }, 0);
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="text-right">
          <span
            style={{ width: 17, cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            <i className="fa fa-cart mr-5">
              <i className="fa fa-cart-arrow-down">
                ({this.renderSoLuong()}) Giỏ hàng
              </i>
            </i>
          </span>
        </div>
        <ProductListRedux></ProductListRedux>
        <GioHangRedux></GioHangRedux>
      </div>
    );
  }
}

// lay gia tri state tu redux store ve bien thanh props component
const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};

export default connect(mapStateToProps)(BaiTapGioHangRedux);
