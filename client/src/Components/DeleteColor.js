import React from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const DeleteColor = ({ index, colors, setColors, setIndex, setSuccess }) => {
  const onDelete = async (e) => {
    setSuccess("");
    e.preventDefault();
    const colorId = colors[index].colorId;
    try {
      await axios
        .delete(`http://localhost:5004/colors/${colorId}`, {})
        .then((res) => {
          setColors(res.data.colors);
          if (index == 0) {
            const newIndex = colors.length - 2;
            setIndex(newIndex);
            console.log(newIndex);
          } else {
            const newIndex = index - 1;
            setIndex(newIndex);
          }
        });
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
