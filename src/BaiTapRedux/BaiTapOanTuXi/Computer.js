import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0;}
    }`;

    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            className="mt-3"
            style={{
              position: "absolute",
              left: "30%",
              animation: `randomItem${Date.now()} 0.5s`,
              width: 100,
              height: 100,
              transform: "rotate(120deg)",
            }}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          ></img>
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/gameOanTuXi/playerComputer.png"
          alt="playerComputer"
        ></img>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
