import React from "react";

const SetBackground = ({ colors, index }) => {
  const onSet = (e) => {
    console.log(colors[index].hexString);
    setBackgroundColor(colors[index].hexString)
  };

  function setBackgroundColor(hexString) {
    document.body.style.backgroundColor = hexString;
  }
  
  return (
    <div>
      <button className="btn btn-primary" onClick={(e) => onSet(e)}>
        Set
      </button>
    </div>
  );
};

export default SetBackground;
