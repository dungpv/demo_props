import React, { Component } from "react";
import "./BaiTapGameXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">
          Bài tập game xúc xắc
        </div>
        <div className="row text-center mt-2">
          <div className="col-4">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="btnGame"
            >
              TÀI
            </button>
          </div>
          <div className="col-4">
            <XucXac></XucXac>
          </div>
          <div className="col-4">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="btnGame"
            >
              XỈU
            </button>
          </div>
        </div>
        <div className="thongTinTroChoi text-center">
          <ThongTinTroChoi></ThongTinTroChoi>
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-2 display-4"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);
