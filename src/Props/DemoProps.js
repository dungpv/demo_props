import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import Parent from "./Parent";

export default class DemoProps extends Component {
  refParent = React.createRef();
  changeTitle = () => {
    this.refParent.current.changeTitle();
  };
  render() {
    return (
      <div>
        {/* Cach 1 */}
        {/* <Parent component={DanhSachSanPham}></Parent> */}
        {/* Cach 2 */}
        {/* <Parent
          component={() => {
            return <DanhSachSanPham></DanhSachSanPham>;
          }}
        ></Parent> */}
        {/* Cach 3 */}
        <button onClick={this.changeTitle}>change Title</button>
        <Parent ref={this.refParent}>
          <DanhSachSanPham></DanhSachSanPham>
          <DanhSachSanPham></DanhSachSanPham>
        </Parent>
      </div>
    );
  }
}
