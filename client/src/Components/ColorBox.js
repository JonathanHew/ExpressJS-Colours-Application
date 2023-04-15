import React from "react";

const ColorBox = ({ hex }) => {
  const boxStyle = {
    width: "100px",
    height: "100px",
    border: "solid 5px #D3D3D3",
    borderRadius: 1,
    backgroundColor: hex,
  };
  return <div style={boxStyle} className="m-auto mt-3"></div>;
};

export default ColorBox;
