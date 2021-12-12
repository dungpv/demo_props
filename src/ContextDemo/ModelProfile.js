import React, { Component } from "react";
import { ModelContext } from "./_Context/ModelContext";

export default class ModelProfile extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div className="mt-5">
              <h3>Profile</h3>
              <div className="card text-white bg-dark" style={{ width: 250 }}>
                <img
                  style={{ width: 250, height: 300 }}
                  className="card-img-top"
                  src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2020/11/11/photo-1-1605088347067237803923.png"
                  alt="zoro"
                />
                <div className="card-body">
                  <h4 className="card-title">Tên: Zoro</h4>
                  <p className="card-text">Tuổi: 21</p>
                  <span style={{ color: "red" }}>
                    {" "}
                    {value.stateLike} <i className="fa fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}
