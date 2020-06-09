import React, { useState } from "react";
import Option from "./Option";

const Question = ({ question, render }) => {
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
    console.log(options);
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
    </div>
  );
};

export default Question;
