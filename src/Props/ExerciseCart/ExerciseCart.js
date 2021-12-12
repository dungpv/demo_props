import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductListEXC from "./ProductListEXC";

export default class ExerciseCart extends Component {
  state = {
    gioHang: [],
  };

  themGioHang = (sanPham) => {
    //console.log(sanPham);
    let spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      donGia: sanPham.giaBan,
      soLuong: 1,
      hinhAnh: sanPham.hinhAnh,
    };
    // tim san pham da co trong gio hang chua
    let index = this.state.gioHang.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );

    if (index != -1) {
      this.state.gioHang[index].soLuong += 1;
    } else {
      this.state.gioHang.push(spGioHang);
    }

    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  xoaGioHang = (maSP) => {
    let index = this.state.gioHang.findIndex(
      (spGioHang) => spGioHang.maSP === maSP
    );

    if (index != -1) {
      this.state.gioHang.splice(index, 1);
    }

    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  tinhTongSoLuong = () => {
    // DÙng for
    // let tongSoLuong = 0;
    // for (let i = 0; i < this.state.gioHang.length; i++) {
    //   let spGioHang = this.state.gioHang[i];
    //   tongSoLuong += spGioHang.soLuong;
    // }
    // return tongSoLuong;

    // Reduce
    return this.state.gioHang.reduce((tongSoLuong, spGioHang, index) => {
      return (tongSoLuong += spGioHang.soLuong);
    }, 0);
  };

  tangGiamSoLuong = (maSP, number) => {
    // 1 tang giam -1
    let gioHang = [...this.state.gioHang];
    let index = gioHang.findIndex((spGioHang) => spGioHang.maSP === maSP);
    if (index != -1) {
      if (gioHang[index].soLuong < 1 && number === -1) {
        alert("Số lượng tối thiểu ít nhất là 1!");
        return;
      }
      // Tìm ra spGioHang trong gio hang thu index => tang so luong
      gioHang[index].soLuong += number;
    }

    // render va gan lai gia tri state gioHang
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">BÀI TẬP GIỎ HÀNG</h3>
        <div className="text-right">
          <span
            style={{ width: 17, cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            <i className="fa fa-cart mr-5">
              {" "}
              <i class="fa fa-cart-arrow-down">
                {" "}
                ({this.tinhTongSoLuong()}) Giỏ hàng
              </i>
            </i>
          </span>
        </div>
        <CartModal
          tangGiamSoLuong={this.tangGiamSoLuong}
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
        ></CartModal>
        <ProductListEXC themGioHang={this.themGioHang}></ProductListEXC>
      </div>
    );
  }
}
