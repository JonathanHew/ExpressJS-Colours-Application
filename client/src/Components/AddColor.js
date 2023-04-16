import React from "react";

const AddColor = () => {
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
                  <label for="newName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="newName"
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
                    value="#563d7c"
                    title="Choose your color"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                //onClick={() => onClose()}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                //onClick={(e) => create(e)}
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
