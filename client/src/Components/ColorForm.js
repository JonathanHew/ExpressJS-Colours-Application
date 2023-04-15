import React, { useState, useEffect } from "react";

import axios from "axios";
import ColorBox from "./ColorBox";
axios.defaults.withCredentials = true;

const ColorForm = () => {
  const [colors, setColors] = useState({});
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState({
    id: "",
    name: "",
    hex: "",
    rgb: "",
    hsl: "",
  });

  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:5004/colors/", {}).then((res) => {
        setColors(res.data.colors);
        setValues({
          id: res.data.colors[index].colorId,
          name: res.data.colors[index].name,
          hex: res.data.colors[index].hexString,
          rgb: JSON.stringify(res.data.colors[index].rgb),
          hsl: JSON.stringify(res.data.colors[index].hsl),
        });
      });
      setLoading(false);
    })();
  }, []);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
            id="id"
            name="id"
            value={values.id}
            onChange={(e) => onChange(e)}
            style={{ width: "300px" }}
          />
        </div>
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ColorForm;
