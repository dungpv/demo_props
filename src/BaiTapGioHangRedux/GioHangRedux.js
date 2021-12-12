import React, { Component } from "react";

// su dung thu vien connect de lay du lieu tu store ve
import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            style={{ minWidth: 1000 }}
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.gioHang.map((spGH, index) => {
                      return (
                        <tr key={index}>
                          <td>{spGH.maSP}</td>
                          <td>
                            <img
                              style={{ width: 35, height: 35 }}
                              src={spGH.hinhAnh}
                              alt={spGH.hinhAnh}
                            ></img>
                          </td>
                          <td>{spGH.tenSP}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-success"
                              onClick={() => {
                                this.props.tangGiamSoLuong(spGH.maSP, false);
                              }}
                            >
                              -
                            </button>
                            {spGH.soLuong.toLocaleString()}
                            <button
                              className="btn btn-success"
                              onClick={() => {
                                this.props.tangGiamSoLuong(spGH.maSP, true);
                              }}
                            >
                              +
                            </button>
                          </td>
                          <td>{spGH.gia.toLocaleString()}</td>
                          <td>{(spGH.gia * spGH.soLuong).toLocaleString()}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.props.xoaGioHang(spGH.maSP);
                              }}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="4"></td>
                      <td>Tổng tiền</td>
                      <td>
                        {this.props.gioHang
                          .reduce((tongTien, spGH, index) => {
                            return (tongTien += spGH.soLuong * spGH.gia);
                          }, 0)
                          .toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ham lay state redux bien doi thanh props cua component
const mapStateToProps = (state) => {
  // state tong chua cac state con
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};

// ham dua du lieu len reducer
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      let action = {
        type: "XOA_GIO_HANG",
        maSP,
      };
      // dung phuong thuc dispatch dua du lieu len reducer
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      // tangGiam = true -> tang, false -> giam
      let action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
