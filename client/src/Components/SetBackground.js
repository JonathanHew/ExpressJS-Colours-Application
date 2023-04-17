import React from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const SetBackground = ({ colors, index }) => {
  const onSet = async (e) => {
    try {
      await axios.post('http://localhost:5004/set-background-color', { backgroundColor: colors[index].hexString});
    } catch (err) {
      console.error(err.message);
    }
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
