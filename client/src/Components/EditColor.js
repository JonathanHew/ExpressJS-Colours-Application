import React from "react";

const EditColor = ({colors, index, values}) => {

  const onEdit = (e) => {
    e.preventDefault();
    console.log(colors[index].colorId);
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          onEdit(e);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default EditColor;
