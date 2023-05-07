import React from "react";

const Plan = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <li className="shadow list-unstyled  p-2 my-2 col-sm-9">{props.value}</li>
      <button
        className="btn btn-danger my-2 col-sm-2 offset-1"
        onClick={props.deleted}
      >
        Delete
      </button>
    </div>
  );
};

export default Plan;
