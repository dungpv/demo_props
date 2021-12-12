import React, { Component } from "react";

export default class Child extends Component {
  renderSize = () => {
    let { size } = this.props.productItem;
    return size.map((number, index) => {
      return <button key={index}>{number}</button>;
    });
  };
  render() {
    let { src, name, desc, price } = this.props.productItem;
    let { shoesSize } = this.props;
    return (
      <div>
        <img style={{ width: 150 }} src={src}></img>
        <div style={{ width: 250 }} className="card text-white bg-primary">
          <img className="card-img-top" src={src} alt={src} />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
            {this.renderSize()}

            {shoesSize.map((number, index) => {
              return (
                <button className="btn btn-success" key={index}>
                  {number}
                </button>
              );
            })}

            <button
              onClick={() => {
                this.props.showAlert(desc);
              }}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
