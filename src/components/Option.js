import React from "react";
import "./Option.scss";

const Option = ({ qid, id, value, inputChange }) => {
  return (
    <>
      <label className="radio-container">
        <input
          type="radio"
          id={id}
          value={value}
          onChange={inputChange}
          name={qid}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
};

export default Option;
