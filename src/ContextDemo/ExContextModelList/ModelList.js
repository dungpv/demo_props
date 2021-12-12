import React, { Component } from "react";
import { ExModelListContext } from "../_Context/ExModelListContext";
import ModelItem from "./ModelItem";

export default class ModelList extends Component {
  render() {
    return (
      <ExModelListContext.Consumer>
        {(value) => {
          return (
            <div>
              <h3>Danh sách idol</h3>
              <div className="row">
                {value.modelListState.map((model, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <ModelItem modelItem={model}></ModelItem>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </ExModelListContext.Consumer>
    );
  }
}
