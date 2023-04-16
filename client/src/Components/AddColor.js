import React, { useState } from "react";

const AddColor = () => {
  const [values, setValues] = useState({
    hexString: "",
    rgb: {},
    hsl: {},
    name: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClose = () => {
    setValues({
      hexString: "",
      rgb: {},
      hsl: {},
      name: "",
    });
  };

  const onCreate = async (e) => {
    e.preventDefault();
    try {
      setValues({
        ...values,
        rgb: hexToRGB(values.hexString),
        hsl: hexToHSL(values.hexString),
      });
      console.log("Done!");
    } catch (err) {
      console.error(err.message);
    }
  };

  function hexToRGB(hex) {
    // Remove the leading '#' if present
    const trimmedHex = hex.startsWith("#") ? hex.slice(1) : hex;

    // Ensure the hex string is valid
    if (trimmedHex.length !== 3 && trimmedHex.length !== 6) {
      throw new Error("Invalid hex color string");
    }

    // Expand the short form (e.g. '03F') to the long form (e.g. '0033FF')
    const longHex =
      trimmedHex.length === 3
        ? trimmedHex
            .split("")
            .map((char) => char + char)
            .join("")
        : trimmedHex;

    // Convert the long hex string to an RGB object
    const r = parseInt(longHex.slice(0, 2), 16);
    const g = parseInt(longHex.slice(2, 4), 16);
    const b = parseInt(longHex.slice(4, 6), 16);

    return { r: r, g: g, b: b };
  }

  function hexToHSL(hex) {
    const trimmedHex = hex.startsWith("#") ? hex.slice(1) : hex;
    const longHex =
      trimmedHex.length === 3
        ? trimmedHex
            .split("")
            .map((char) => char + char)
            .join("")
        : trimmedHex;

    const r = parseInt(longHex.slice(0, 2), 16) / 255;
    const g = parseInt(longHex.slice(2, 4), 16) / 255;
    const b = parseInt(longHex.slice(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;

    let h;
    if (diff === 0) {
      h = 0;
    } else if (max === r) {
      h = ((g - b) / diff) % 6;
    } else if (max === g) {
      h = (b - r) / diff + 2;
    } else {
      h = (r - g) / diff + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;

    const l = (max + min) / 2;

    const s = diff === 0 ? 0 : diff / (1 - Math.abs(2 * l - 1));

    return { h, s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  return (
    <div>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        New
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add a new color!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={(e) => onChange(e)}
                    aria-describedby="nameHelp"
                    required
                  />
                  <div id="nameHelp" className="form-text">
                    Give your new color a name!
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleColorInput" className="form-label">
                    Color
                  </label>
                  <input
                    type="color"
                    className="form-control form-control-color m-auto"
                    id="exampleColorInput"
                    name="hexString"
                    value={values.hexString}
                    onChange={(e) => onChange(e)}
                    title="Choose your color"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => onClose()}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-success"
                onClick={(e) => onCreate(e)}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddColor;
