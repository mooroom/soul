import React from "react";

const Option = ({ option, handleChecked }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id={option.id}
        checked={option.isChecked}
        value={option.value}
        onChange={() => handleChecked(option.id)}
      />
      <label className="form-check-label" htmlFor={option.id}>
        {option.value}
      </label>
    </div>
  );
};

export default Option;
