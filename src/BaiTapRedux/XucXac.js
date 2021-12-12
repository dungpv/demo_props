import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    // lay props tu reducer ve
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img
          key={index}
          className="ml-2"
          style={{ width: 50, height: 50 }}
          src={xucXac.hinhAnh}
          alt={xucXac.hinhAnh}
        ></img>
      );
    });
  };

  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

// lay state tu redux ve thanh props cua component
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
