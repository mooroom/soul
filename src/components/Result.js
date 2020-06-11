import React from "react";

const Result = ({ type }) => {
  return (
    <div>
      <h1>result</h1>
      <h3>{type[0]}</h3>
      <h3>{type[1]}</h3>
      <h3>{type[2]}</h3>
      <h3>{type[3]}</h3>
    </div>
  );
};

export default Result;
