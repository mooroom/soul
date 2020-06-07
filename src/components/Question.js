import React, { useState } from "react";
import Option from "./Option";

const Question = ({ question, step, handleCheckedVal, render, nextStep }) => {
  const [options, setOptions] = useState([
    { id: 1, value: 1, isChecked: false },
    { id: 2, value: 2, isChecked: false },
    { id: 3, value: 3, isChecked: false },
    { id: 4, value: 4, isChecked: false },
    { id: 5, value: 5, isChecked: false },
  ]);

  const [selected, setSelected] = useState(null);

  const handleChecked = (id) => {
    let newOptions = options;
    newOptions.forEach((option) => {
      if (option.id === id) {
        option.isChecked = !option.isChecked;
      }
    });
    setOptions(newOptions);
    handleSelected();

    console.log(options);
    console.log(selected);
  };

  const handleSelected = () => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].isChecked === false) {
        setSelected(options[i].value);
      }
    }
    console.log(selected);
  };

  return (
    <div>
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
          onClick={() => {
            nextStep();
            handleCheckedVal(step, selected);
          }}
        >
          다음으로
        </button>
      ) : null}
    </div>
  );
};

export default Question;
