import React, { useState } from "react";
import SearchColor from "./SearchColor";

const ColorForm = ({ colors, values, setValues, index, setIndex }) => {
  const [error, setError] = useState("");
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const nextColor = (e) => {
    e.preventDefault();
    setError("");
    const newIndex = index + 1;
    if (newIndex == colors.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  const prevColor = (e) => {
    e.preventDefault();
    setError("");
    const newIndex = index - 1;
    if (newIndex < 0) {
      setIndex(colors.length - 1);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <div>
      <form className="container mt-3">
        <label for="colorName" class="form-label">
          Color ID
        </label>
        <div className="input-group mb-1 m-auto" style={{ width: "200px" }}>
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={(e) => prevColor(e)}
          >
            Prev
          </button>
          <input
            type="number"
            className="form-control m-auto"
            id="id"
            name="id"
            value={values.id}
            onChange={(e) => onChange(e)}
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={(e) => {
              nextColor(e);
            }}
          >
            Next
          </button>
        </div>
        <SearchColor
          values={values}
          colors={colors}
          setIndex={setIndex}
          error={error}
          setError={setError}
        />
        <div class="mt-1 mb-1">
          <label for="colorName" class="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control m-auto"
            id="name"
            name="name"
            value={values.name}
            onChange={(e) => onChange(e)}
            style={{ width: "300px" }}
          />
        </div>
        <div class="mb-1">
          <label for="colorHex" class="form-label">
            Hex
          </label>
          <input
            type="text"
            className="form-control m-auto"
            id="hex"
            name="hex"
            value={values.hex}
            onChange={(e) => onChange(e)}
            style={{ width: "300px" }}
          />
        </div>
        <div class="mb-1">
          <label for="colorRGB" class="form-label">
            RGB
          </label>
          <input
            type="text"
            className="form-control m-auto"
            id="rgb"
            name="rgb"
            value={values.rgb}
            onChange={(e) => onChange(e)}
            style={{ width: "300px" }}
          />
        </div>
        <div>
          <label for="colorHSL" class="form-label">
            HSL
          </label>
          <input
            type="text"
            className="form-control m-auto"
            id="hsl"
            name="hsl"
            value={values.hsl}
            onChange={(e) => onChange(e)}
            style={{ width: "300px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default ColorForm;
