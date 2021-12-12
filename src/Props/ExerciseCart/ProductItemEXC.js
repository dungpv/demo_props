import React, { Component } from "react";

export default class ProductItemEXC extends Component {
  render() {
    let { sanPhamProps } = this.props;
    return (
      <div>
        <div className="card text-center">
          <img
            style={{ width: 300, height: 300 }}
            className="card-img-top"
            src={sanPhamProps.hinhAnh}
            alt={sanPhamProps.hinhAnh}
          />
          <div className="card-body text-center">
            <h4 className="card-title">{sanPhamProps.tenSP}</h4>
            <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.themGioHang(sanPhamProps);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
