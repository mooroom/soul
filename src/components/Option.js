import React from "react";

const Option = ({ option, handleChecked }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        type="checkbox"
        key={option.id}
        value={option.value}
        onChange={() => handleChecked(option.id)}
        checked={option.isChecked}
      />
      <label className="form-check-label" htmlFor={option.id}>
        {option.value}
      </label>
    </div>
  );
};

export default Option;
