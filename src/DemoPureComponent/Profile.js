import React, { Component, PureComponent } from "react";

export default class Profile extends PureComponent {
  render() {
    console.log("load");
    return (
      <div className="card text-white bg-dark" style={{ width: 250 }}>
        <img
          style={{ width: 250, height: 300 }}
          className="card-img-top"
          src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2020/11/11/photo-1-1605088347067237803923.png"
          alt="zoro"
        />
        <div className="card-body">
          <h3 style={{ color: "red" }}>
            Số lượt thả tim {this.props.like.soLuong}
          </h3>
          <h4 className="card-title">Title: Zoro</h4>
          <p className="card-text">Tuổi: 21</p>
        </div>
      </div>
    );
  }
}
