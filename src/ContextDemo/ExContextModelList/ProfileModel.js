import React, { Component } from "react";
import { ExModelListContext } from "../_Context/ExModelListContext";

export default class ProfileModel extends Component {
  render() {
    return (
      <div>
        <h3>Thông tin idol</h3>
        <ExModelListContext.Consumer>
          {(value) => {
            let activeModel = value.modelListState.find(
              (model) => model.active === true
            );
            return (
              <div className="card text-left" style={{ width: 250 }}>
                <img
                  className="card-img-top"
                  src={activeModel.img}
                  alt={activeModel.img}
                />
                <div className="card-body">
                  <h4 className="card-title">Họ tên: {activeModel.name}</h4>
                  <p className="card-text">Tuổi: {activeModel.age}</p>
                  <p className="card-text">
                    Lượt thích: {activeModel.like}
                    <i
                      style={{ color: "red" }}
                      className="fa fa-heart"
                    ></i>{" "}
                  </p>
                </div>
              </div>
            );
          }}
        </ExModelListContext.Consumer>
      </div>
    );
  }
}
