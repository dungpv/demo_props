import React, { Component } from "react";
import { ModelContext } from "./_Context/ModelContext";

export default class LikeProfile extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div className="mt-5">
              <div className="card text-dark bg-default" style={{ width: 250 }}>
                <div className="card-body">
                  <button
                    onClick={() => {
                      value.setLike();
                    }}
                    style={{ color: "red", border: "1px solid red" }}
                    className="card-title"
                  >
                    {value.stateLike} Like <i className="fa fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}
