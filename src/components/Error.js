import React from "react";

const Error = props => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Page Not Found!</h1>
        <p className="lead">
          The page you are looking for certainly does not exist.
        </p>
        <button className="btn" onClick={() => props.history.push("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
};
export default Error;
