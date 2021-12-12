import React from "react";

export default function ChildFunctional(props) {
  let { src, name, desc } = props.productItem;

  return (
    <div>
      <img style={{ width: 150 }} src={src}></img>
      <div style={{ width: 250 }} className="card text-white bg-primary">
        <img className="card-img-top" src={src} alt={src} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
}
