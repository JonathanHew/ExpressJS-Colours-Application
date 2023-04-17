import React from "react";

const DeleteColor = ({ index, colors }) => {
  const onDelete = (e) => {
    e.preventDefault();
    console.log(index);
    const colorId = colors[index].colorId;

    try {
        
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
