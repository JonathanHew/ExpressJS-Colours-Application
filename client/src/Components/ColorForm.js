import React, { useState, useEffect } from "react";

import axios from "axios";
import ColorBox from "./ColorBox";
axios.defaults.withCredentials = true;

const ColorForm = () => {
  const [colors, setColors] = useState({});
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(20);

  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:5004/colors/", {}).then((res) => {
        setColors(res.data.colors);
      });
      setLoading(false);
    })();
  }, []);

  return loading ? (
    <h1>Loading ...</h1>
  ) : (
    <div className="text-center ">
      <h1>Colors Application</h1>
      <ColorBox hex={colors[index].hexString} />

      <form className="container mt-3">
        <div className="mb-3">
          <label for="colorId" class="form-label">
            Color ID
          </label>
          <input
            type="number"
            className="form-control m-auto"
            id="colorInput"
            style={{width: "300px"}}
          />
        </div>
        <div class="mb-3">
          <label for="colorName" class="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control m-auto"
            id="nameInput"
            style={{width: "300px"}}
          />
        </div>
        <div class="mb-3">
          <label for="colorHex" class="form-label">
            Hex
          </label>
          <input
            type="text"
            className="form-control m-auto"
            id="hexInput"
            style={{width: "300px"}}
          />
        </div>
        <div class="mb-3">
          <label for="colorRGB" class="form-label">
            RGB
          </label>
          <input
            type="text"
            className="form-control m-auto"
            id="rgbInput"
            style={{width: "300px"}}
          />
        </div>
        <div class="mb-3">
          <label for="colorHSL" class="form-label">
            HSL
          </label>
          <input
            type="text"
            className="form-control m-auto"
            id="hslInput"
            style={{width: "300px"}}
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ColorForm;
