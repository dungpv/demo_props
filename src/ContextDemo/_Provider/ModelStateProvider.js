import React, { Component } from "react";
import { ModelContext } from "../_Context/ModelContext";

export default class ModelStateProvider extends Component {
  state = {
    like: 1,
  };

  setLike = () => {
    this.setState({
      like: this.state.like + 1,
    });
  };

  // tu context su dung provider de chia se state cho cac child component
  render() {
    return (
      <ModelContext.Provider
        value={{ stateLike: this.state.like, setLike: this.setLike }}
      >
        {/* Pham vi su dung context */}
        {this.props.children}
      </ModelContext.Provider>
    );
  }
}
