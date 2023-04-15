import React, { useState, useEffect } from "react";

import axios from "axios";
axios.defaults.withCredentials = true;

const ColorForm = () => {
  const [colors, setColors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:5004/colors/", {}).then((res) => {
        setColors(res.data.colors);
      });
      setLoading(false);
    })();
  }, []);

  return loading ? <h1>Loading ...</h1> : <div>Colors</div>;
};

export default ColorForm;
