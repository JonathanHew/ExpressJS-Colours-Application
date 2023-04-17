import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Fragment>
      <div>
        <h1>Error: Page not found</h1>
        <Link to="/">Go to the main page</Link>
      </div>
    </Fragment>
  );
};

export default ErrorPage;
