import React, { Component } from "react";
import Profile from "./Profile";

export default class DemoPureComponent extends Component {
  state = {
    like: { soLuong: 0 },
  };
  // khong lam dung pureComponent
  likeImage = () => {
    let likeHienTai = this.state.like;
    likeHienTai.soLuong += 1;
    this.setState({
      like: { ...likeHienTai },
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Profile Zoro</h3>
        <Profile like={this.state.like}></Profile>
        <br></br>
        <div className="card text-white bg-default">
          <h3 style={{ color: "red" }}>
            Số lượt thả tim {this.state.like.soLuong}
          </h3>
          <div className="card-body">
            <button
              className="btn"
              style={{ color: "red", border: "1px solid red" }}
              onClick={() => {
                this.likeImage();
              }}
            >
              Thả tim
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
