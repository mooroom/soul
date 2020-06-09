import React, { useState, useRef } from "react";
import shapes from "../img/shapes.png";
import style from "styled-components";
import Question from "./Question";

const TestCard = style.div`
    background: white;
    border-radius: 15px;
    color: black;
    padding: 5px 30px 30px 30px;
    text-align: center
`;

const Test = () => {
  const checkedValueSum = useRef([]);

  const [step, setStep] = useState(1);

  const [types, setTypes] = useState({
    typeA: 0,
    typeB: 0,
    typeC: 0,
    typeD: 0,
  });

  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "나는 우울할 때 일부러 사람을 만나는 편이다.",
      checkedVal: null,
      render: true,
    },
    {
      id: 2,
      title: "나는 나의 상태에 누군가 관심을 가져줬으면 좋겠다.",
      checkedVal: null,
      render: false,
    },
    {
      id: 3,
      title: "혼자 있으면 우울에 침잠 되는 기분이 든다.",
      checkedVal: null,
      render: false,
    },
    {
      id: 4,
      title: "몸을 움직이는 게 기분 전환에 도움이 된다.",
      checkedVal: null,
      render: false,
    },
    {
      id: 5,
      title: "운동을 꾸준히 해 본 경험이 있다.",
      checkedVal: null,
      render: false,
    },
    {
      id: 6,
      title: "하루 평균 6000보 이상 걷는다.",
      checkedVal: null,
      render: false,
    },
    {
      id: 7,
      title: "내 취향의 음악을 찾고 듣는 것을 좋아한다.",
      checkedVal: null,
      render: false,
    },
    {
      id: 8,
      title: "미술 전시, 작품 보는 것을 좋아한다.",
      checkedVal: null,
      render: false,
    },
    {
      id: 9,
      title: "영상미 넘치는 영상을 유튜브에서 즐겨 본다.",
      checkedVal: null,
      render: false,
    },
    {
      id: 10,
      title: "일기, 글 쓰기를 통해 내 생각을 잘 표현하는 편이다.",
      checkedVal: null,
      render: false,
    },
    {
      id: 11,
      title: "주변 사람들은 내 일상과 생각에 대해 잘 알고 있다.",
      checkedVal: null,
      render: false,
    },
    {
      id: 12,
      title: "나는 우울할 때 일부러 사람을 만나는 편이다.",
      checkedVal: null,
      render: false,
    },
  ]);

  // const handleCheckedVal = (step, selectedVal) => {
  //   setQuestions(
  //     questions.map((question) =>
  //       question.id === step
  //         ? { ...question, checkedVal: selectedVal }
  //         : question
  //     )
  //   );
  //   console.log(questions);
  // };

  const nextStep = () => {
    setStep(step + 1);
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].id === step) {
        questions[i].render = true;
      } else {
        questions[i].render = false;
      }
    }
    //console.log(currentStep.current);
    //checkedValueSum.current.push(questions[currentStep.current - 1].id);
  };

  return (
    <div className="container">
      <img
        src={shapes}
        width="236"
        alt="logo"
        style={{ marginBottom: "75px" }}
      />
      <TestCard>
        <small>{step} / 12</small>

        {questions.map((question) => (
          <Question
            question={question}
            key={question.id}
            step={step}
            //handleCheckedVal={handleCheckedVal}
            render={question.render}
            nextStep={nextStep}
          />
        ))}
      </TestCard>
    </div>
  );
};

export default Test;
