import React, { Component } from "react";
import ExContextModelList from "./ContextDemo/ExContextModelList/ExContextModelList";
// import ContextDemo from "./ContextDemo/ContextDemo";
// import DemoPureComponent from "./DemoPureComponent/DemoPureComponent";
// import BaiTapBookingTicket from "./BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket";
// import BaiTapOanTuXi from "./BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi";
// import BaiTapGioHangRedux from "./BaiTapGioHangRedux/BaiTapGioHangRedux";
// import BaiTapGameXucXac from "./BaiTapRedux/BaiTapGameXucXac";
// import ExerciseCarStore from "./Props/ExerciseCarStore/ExerciseCarStore";
// import DanhSachSanPham from "./Props/DanhSachSanPham";
// import ExerciseCart from "./Props/ExerciseCart/ExerciseCart";
// import DemoProps from "./Props/DemoProps";
// import ProductList from "./Props/ProductList";
// import dataJson from "./Data/data.json";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <DanhSachSanPham></DanhSachSanPham> */}
        {/* <ExerciseCarStore></ExerciseCarStore> */}
        {/* <DemoProps></DemoProps> */}
        {/* <ExerciseCart></ExerciseCart> */}
        {/* <BaiTapGioHangRedux></BaiTapGioHangRedux> */}
        {/* <BaiTapGameXucXac></BaiTapGameXucXac> */}
        {/* <BaiTapOanTuXi></BaiTapOanTuXi> */}
        {/* <BaiTapBookingTicket></BaiTapBookingTicket> */}
        {/* <DemoPureComponent></DemoPureComponent> */}
        {/* <ContextDemo></ContextDemo> */}
        <ExContextModelList></ExContextModelList>
      </div>
      // <div className="container-fluid">
      //   {/* <DemoProps></DemoProps> */}
      //   <div className="row">
      //     <div className="col-4">
      //       <div
      //         className="nav flex-column nav-pills justify-content-center"
      //         style={{ minHeight: 800 }}
      //         id="v-pills-tab"
      //         role="tablist"
      //         aria-orientation="vertical"
      //       >
      //         <a
      //           className="nav-link active"
      //           id="v-pills-home-tab"
      //           data-toggle="pill"
      //           href="#v-pills-home"
      //           role="tab"
      //           aria-controls="v-pills-home"
      //           aria-selected="true"
      //         >
      //           Home
      //         </a>
      //         <a
      //           className="nav-link"
      //           id="v-pills-shop-tab"
      //           data-toggle="pill"
      //           href="#v-pills-shop"
      //           role="tab"
      //           aria-controls="v-pills-shop"
      //           aria-selected="false"
      //         >
      //           Shop
      //         </a>
      //       </div>
      //     </div>
      //     <div className="productList col-8">
      //       <div className="tab-content" id="v-pills-tabContent">
      //         <div
      //           className="tab-pane fade show active"
      //           id="v-pills-home"
      //           role="tabpanel"
      //           aria-labelledby="v-pills-home-tab"
      //         >
      //           <ProductList arrProduct={dataJson}></ProductList>
      //         </div>
      //         <div
      //           className="tab-pane fade"
      //           id="v-pills-shop"
      //           role="tabpanel"
      //           aria-labelledby="v-pills-shop-tab"
      //         >
      //           Shop
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
