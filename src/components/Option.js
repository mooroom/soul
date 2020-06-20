import React from "react";
import "./Option.scss";

const Option = ({ qid, id, value, inputChange }) => {
  return (
    <>
      <label className="radio-container">
        <input
          type="checkbox"
          id={id}
          value={value}
          onClick={inputChange}
          name={qid}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
};

export default Option;
