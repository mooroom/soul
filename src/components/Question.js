<<<<<<< HEAD
import React, { useState } from "react";
import Option from "./Option";

const Question = ({ question, step, render, nextStep }) => {
  const [options, setOptions] = useState([
    { id: 1, value: "1", isChecked: false },
    { id: 2, value: "2", isChecked: false },
    { id: 3, value: "3", isChecked: false },
    { id: 4, value: "4", isChecked: false },
    { id: 5, value: "5", isChecked: false },
  ]);

  const handleChecked = (id) => {
    let newOptions = options;
    newOptions.forEach((option) => {
      if (option.id === id) {
        option.isChecked = !option.isChecked;
      }
    });
    setOptions(newOptions);

    console.log(options);
  };
=======
import React from "react";
>>>>>>> parent of 5e60224... 0605 imac

const Question = ({ question }) => {
  return (
    <div>
<<<<<<< HEAD
      {render ? <p>{question.title}</p> : null}

      {render
        ? options.map((option) => {
            return (
              <Option
                option={option}
                handleChecked={handleChecked}
                key={option.id}
              />
            );
          })
        : null}

      {render ? (
        <button
          type="button"
          className="btn purple d-block m-auto"
          style={{ color: "white" }}
          onClick={() => nextStep()}
        >
          다음으로
        </button>
      ) : null}
=======
      <p>{question.id}</p>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          //value={checkedVal}
          //onChange={onChange}
        />
        <label class="form-check-label" for="inlineCheckbox1">
          1
        </label>
      </div>
      <button
        type="button"
        className="btn purple d-block m-auto"
        style={{ color: "white" }}
        //onClick={nextStep}
      >
        다음으로
      </button>
>>>>>>> parent of 5e60224... 0605 imac
    </div>
  );
};

export default Question;
