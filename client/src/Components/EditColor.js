import React from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const EditColor = ({ colors, index, values, setSuccess }) => {
  const onEdit = async (e) => {
    e.preventDefault();
    setSuccess("");
    const color = {
      hexString: values.hex,
      rgb: JSON.parse(values.rgb),
      hsl: JSON.parse(values.hsl),
      name: values.name,
    };

    try {
      await axios
        .put(`http://localhost:5004/colors/${colors[index].colorId}`, color)
        .then((res) => {
          setSuccess("Color Updated!");
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
          onEdit(e);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default EditColor;
