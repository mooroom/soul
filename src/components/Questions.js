import React, { useState, useRef } from "react";
import Q1 from "./Q1";
import Q2 from "./Q2";

const Questions = () => {
  const [step, setStep] = useState(1);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "나는 우울할 때 일부러 사람을 만나는 편이다.",
      checkedVal: "",
      render: true,
    },
    {
      id: 2,
      title: "나는 나의 상태에 누군가 관심을 가져줬으면 좋겠다.",
      checkedVal: "",
      render: false,
    },
    {
      id: 3,
      title: "혼자 있으면 우울에 침잠 되는 기분이 든다.",
      checkedVal: "",
      render: false,
    },
    {
      id: 4,
      title: "몸을 움직이는 게 기분 전환에 도움이 된다.",
      checkedVal: "",
      render: false,
    },
    {
      id: 5,
      title: "운동을 꾸준히 해 본 경험이 있다.",
      checkedVal: "",
      render: false,
    },
    {
      id: 6,
      title: "하루 평균 6000보 이상 걷는다.",
      checkedVal: "",
      render: false,
    },
    {
      id: 7,
      title: "내 취향의 음악을 찾고 듣는 것을 좋아한다.",
      checkedVal: "",
      render: false,
    },
    {
      id: 8,
      title: "미술 전시, 작품 보는 것을 좋아한다.",
      checkedVal: "",
      render: false,
    },
    {
      id: 9,
      title: "영상미 넘치는 영상을 유튜브에서 즐겨 본다.",
      checkedVal: "",
      render: false,
    },
    {
      id: 10,
      title: "일기, 글 쓰기를 통해 내 생각을 잘 표현하는 편이다.",
      checkedVal: "",
      render: false,
    },
    {
      id: 11,
      title: "주변 사람들은 내 일상과 생각에 대해 잘 알고 있다.",
      checkedVal: "",
      render: false,
    },
    {
      id: 12,
      title: "나는 우울할 때 일부러 사람을 만나는 편이다.",
      checkedVal: "",
      render: false,
    },
  ]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const inputChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    let qts = questions;
    qts.forEach((qt) => {
      if (qt.id === e.target.id) {
        qt.checkedVal = e.target.value;
        console.log(qt.checkedVal);
      } else {
        console.log("fuck");
      }
    });
    setQuestions(qts);

    // setQuestions(
    //   questions.map((question) =>
    //     question.id === e.target.id
    //       ? { ...question, checkedVal: e.target.value }
    //       : question
    //   )
    // );
  };

  switch (step) {
    case 1:
      return (
        <Q1
          step={step}
          nextStep={nextStep}
          question={questions[0]}
          inputChange={inputChange}
        />
      );
    case 2:
      return (
        <Q2
          step={step}
          nextStep={nextStep}
          question={questions[1]}
          inputChange={inputChange}
        />
      );
    default:
      return;
  }
};

export default Questions;
