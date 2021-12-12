import React, { Component } from "react";
import ExModelListProvider from "../_Provider/ExModelListProvider";
import ModelList from "./ModelList";
import ProfileModel from "./ProfileModel";

export default class ExContextModelList extends Component {
  render() {
    return (
      <ExModelListProvider>
        <div className="container">
          <ProfileModel></ProfileModel>
          <ModelList></ModelList>
        </div>
      </ExModelListProvider>
    );
  }
}
