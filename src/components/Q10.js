import React, { useState } from "react";
import Option from "./Option";
import Progressbar from "react-bootstrap/Progressbar";

const Q10 = ({ step, nextStep, question, inputChange }) => {
  const [options, setOptions] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ]);

  const now = (step / 12) * 100;
  return (
    <div className="QuestionBox">
      <Progressbar animated now={now} className="mb-3" />
      <div className="f-12 mb-5">{step} / 12</div>
      <div className="question f-16 mb-4">{question.title}</div>
      <div className="radioBox mb-1">
        {options.map((option) => (
          <Option
            qid={question.id}
            id={option.id}
            key={option.id}
            value={option.value}
            inputChange={inputChange}
          />
        ))}
      </div>
      <div className="degreeBox mb-5 f-10">
        <span>매우 아니다</span>
        <span>매우 그렇다</span>
      </div>
      <div>
        <button className="soul-btn" onClick={nextStep}>
          다음으로
        </button>
      </div>
    </div>
  );
};

export default Q10;
