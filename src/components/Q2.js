import React, { useState } from "react";
import Option from "./Option";

const Q2 = ({ step, nextStep, question, inputChange }) => {
  const [options, setOptions] = useState([
    { id: 1, value: 1, isChecked: false },
    { id: 2, value: 2, isChecked: false },
    { id: 3, value: 3, isChecked: false },
    { id: 4, value: 4, isChecked: false },
    { id: 5, value: 5, isChecked: false },
  ]);

  return (
    <div>
      <small>{step} / 12</small>
      <p>{question.title}</p>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id={question.id}
          key={options[0].id}
          value={options[0].value}
          onClick={inputChange}
          //defaultChecked={options[0].isChecked}
        />
        <label className="form-check-label" htmlFor={options[0].id}>
          {options[0].value}
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id={question.id}
          key={options[1].id}
          value={options[1].value}
          onClick={inputChange}
          //defaultChecked={options[1].isChecked}
        />
        <label className="form-check-label" htmlFor={options[1].id}>
          {options[1].value}
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id={question.id}
          key={options[2].id}
          value={options[2].value}
          onClick={inputChange}
          //defaultChecked={options[2].isChecked}
        />
        <label className="form-check-label" htmlFor={options[2].id}>
          {options[2].value}
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id={question.id}
          key={options[3].id}
          value={options[3].value}
          onClick={inputChange}
          //defaultChecked={options[3].isChecked}
        />
        <label className="form-check-label" htmlFor={options[3].id}>
          {options[3].value}
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id={question.id}
          key={options[4].id}
          value={options[4].value}
          onClick={inputChange}
          //defaultChecked={options[4].isChecked}
        />
        <label className="form-check-label" htmlFor={options[4].id}>
          {options[4].value}
        </label>
      </div>

      <button
        type="button"
        className="btn purple d-block m-auto"
        style={{ color: "white" }}
        onClick={nextStep}
      >
        다음으로
      </button>
    </div>
  );
};

export default Q2;
