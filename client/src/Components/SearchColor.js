import React, { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const SearchColor = ({ values, colors, setIndex, error, setError }) => {
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios
        .get(`http://localhost:5004/colors/${values.id}`, {})
        .then((res) => {
          const newIndex = colors.findIndex(
            (color) => color.colorId === res.data.color[0].colorId
          );
          setIndex(newIndex);
          setError("");
        });
    } catch (err) {
      console.log(err.message);
      setError("Color does not exist!")
    }
  };

  return (
    <div>
      <div style={{ color: "red" }}>{error}</div>
      <button
        className="btn btn-sm btn-primary"
        type="button"
        onClick={(e) => onSubmit(e)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchColor;
