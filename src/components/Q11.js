import React, { useState } from "react";
import Option from "./Option";

const Q11 = ({ step, nextStep, question, inputChange }) => {
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
      {options.map((option) => (
        <Option
          qid={question.id}
          id={option.id}
          key={option.id}
          value={option.value}
          inputChange={inputChange}
        />
      ))}

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

export default Q11;
