import React from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const DeleteColor = ({ index, colors, setColors, setIndex }) => {

  const onDelete = async(e) => {
    e.preventDefault();
    const colorId = colors[index].colorId;
    try {
        await axios
        .delete(`http://localhost:5004/colors/${colorId}`, {})
        .then((res) => {
          console.log(res);
          setColors(res.data.colors);
          console.log("Colors set!");
          setIndex(index-1);
        })
    } catch (err) {
        console.error(err.message);
    }
  };
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          onDelete(e);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteColor;
