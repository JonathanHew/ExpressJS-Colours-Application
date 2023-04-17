import { Fragment, useEffect, useState } from "react";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import ColorBox from "./Components/ColorBox";
import axios from "axios";
import AddColor from "./Components/AddColor";
import DeleteColor from "./Components/DeleteColor";
import EditColor from "./Components/EditColor";
import SetBackground from "./Components/SetBackground";
axios.defaults.withCredentials = true;

function App() {
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState({});
  const [index, setIndex] = useState(2);
  const [search, setSearch] = useState(0);
  const [success, setSuccess] = useState("");
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
        setSearch(res.data.colors[index].colorId);
      });
      setLoading(false);
    })();
  }, [index]);

  return loading ? (
    <Fragment>
      <h1>Loading...</h1>
    </Fragment>
  ) : (
    <Fragment>
      <div className="container text-center">
        <div className="card w-100 mt-5">
          <div className="card-body">
            <h1>Colors Application</h1>
            <ColorBox hex={colors[index].hexString} />
            <ColorForm
              colors={colors}
              values={values}
              setValues={setValues}
              index={index}
              setIndex={setIndex}
              setSuccess={setSuccess}
            />
          </div>
          <div style={{ color: "green" }}>{success}</div>
          <div className="row mb-3">
            <div className="col-4"></div>
            <div className="col-1">
              <AddColor setColors={setColors} />
            </div>
            <div className="col-1">
              <DeleteColor
                index={index}
                colors={colors}
                setColors={setColors}
                setIndex={setIndex}
                setSuccess={setSuccess}
              />
            </div>
            <div className="col-1">
              <EditColor
                colors={colors}
                index={index}
                values={values}
                setSuccess={setSuccess}
              />
            </div>
            <div className="col-1">
              <SetBackground />
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
