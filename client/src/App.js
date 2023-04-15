import { Fragment } from "react";
import "./App.css";
import ColorForm from "./Components/ColorForm";

function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="card w-100 mt-5">
          <div className="card-body">
            <ColorForm />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
