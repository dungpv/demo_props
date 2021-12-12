import React, { Component } from "react";
import Child from "./Child";
import ChildFunctional from "./ChildFunctional";

export default class Parent extends Component {
  // product = {
  //   id: 1,
  //   src: "https://product.hstatic.net/1000230642/product/dsmh03400-den__1_-1_96e374650af3434f88f87da822e1e2d4_1024x1024.jpg",
  //   name: "Bitis Hunter 1",
  //   desc: "Giầy bitis siêu bền, rẻ, đẹp",
  //   price: 100000,
  //   size: [38, 39, 40, 41, 42],
  // };
  // size = [38, 39, 40, 41, 42];
  // showInfo = (name) => {
  //   alert(name);
  // };
  // render() {
  //   return (
  //     <div>
  //       {/* <input type="text"></input>
  //       <Child propSource={this.src} name={this.name}></Child> */}
  //       {/* <Child propSource={this.src} name="Bitis Hunter 2"></Child>
  //       <Child propSource={this.src} name="Bitis Hunter 3"></Child>
  //       <Child propSource={this.src} name="Bitis Hunter 4"></Child> */}
  //       {/* <ChildFunctional productItem={this.product}></ChildFunctional> */}

  //       <Child
  //         showAlert={this.showInfo}
  //         productItem={this.product}
  //         shoesSize={this.size}
  //       ></Child>
  //     </div>
  //   );
  // }

  state = { title: "cyberlearn" };
  changeTitle = () => {
    this.setState({
      title: "dungpv",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>

        <h3>Danh sách sản phẩm</h3>
        {/* <this.props.component></this.props.component> */}
        {/* {this.props.component()} */}
        {/* {this.props.children} */}
        {this.props.children.map((com, index) => {
          return com;
        })}
      </div>
    );
  }
}
