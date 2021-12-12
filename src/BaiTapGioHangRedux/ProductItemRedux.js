import React, { Component } from "react";
import { connect } from "react-redux";
class ProductItemRedux extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card text-left">
        <img
          style={{ width: 300, height: 300 }}
          className="card-img-top"
          src={product.hinhAnh}
          alt={product.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP} </h4>
          <p className="card-text">{product.giaBan.toLocaleString()} </p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.themGioHang(product);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
// gui du lieu len store tong
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPham) => {
      // tao ra sp gio hang
      let spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh: sanPham.hinhAnh,
        soLuong: 1,
        gia: sanPham.giaBan,
      };
      let action = {
        type: "THEM_GIO_HANG", // thuoc tinh bat buoc cua action
        spGioHang,
      };

      // DUng ham dispatch tu redux => gui du lieu len reducer
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItemRedux);
