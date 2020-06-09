import React from "react";

const Option = ({ qid, id, value, inputChange }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        value={value}
        onClick={inputChange}
        name={qid}
      />
      <label className="form-check-label" htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default Option;
