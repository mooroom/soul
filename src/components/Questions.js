import React, { useState, useRef } from "react";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";
import Q7 from "./Q7";
import Q8 from "./Q8";
import Q9 from "./Q9";
import Q10 from "./Q10";
import Q11 from "./Q11";
import Q12 from "./Q12";
import Result from "./Result";

const Questions = () => {
  const [step, setStep] = useState(1);

  const [type, setType] = useState([]);

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

  const finishStep = () => {
    setStep(step + 1);
    let checkedArray = [];
    questions.forEach((question) =>
      checkedArray.push(parseInt(question.checkedVal, 10))
    );
    //console.log(checkedArray);
    let sumA = 0;
    let sumB = 0;
    let sumC = 0;
    let sumD = 0;

    for (let i = 0; i < 3; i++) {
      sumA += checkedArray[i];
    }
    for (let i = 3; i < 6; i++) {
      sumB += checkedArray[i];
    }
    for (let i = 6; i < 9; i++) {
      sumC += checkedArray[i];
    }
    for (let i = 9; i < 12; i++) {
      sumD += checkedArray[i];
    }
    console.log(sumA);
    console.log(sumB);
    console.log(sumC);
    console.log(sumD);

    let typesArray = [];

    const decideType = (sumX, X) => {
      if (sumX >= 9) {
        typesArray.push(X);
      } else {
        typesArray.push(`n${X}`);
      }
    };

    decideType(sumA, "A");
    decideType(sumB, "B");
    decideType(sumC, "C");
    decideType(sumD, "D");

    // 걍 setType 안하고 typesArray 채로 연산해서 firestore 에 넘겨줘도 될듯
    setType(typesArray);
    console.log(type);
  };

  const inputChange = (e) => {
    let eTargetName = parseInt(e.target.name, 10);
    let qts = questions;

    qts.forEach((qt) => {
      if (qt.id === eTargetName) {
        qt.checkedVal = e.target.value;
        //console.log(qt.checkedVal);
      } else {
        //console.log("fuck");
      }
    });
    setQuestions(qts);
    console.log(questions);
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
    case 3:
      return (
        <Q3
          step={step}
          nextStep={nextStep}
          question={questions[2]}
          inputChange={inputChange}
        />
      );
    case 4:
      return (
        <Q4
          step={step}
          nextStep={nextStep}
          question={questions[3]}
          inputChange={inputChange}
        />
      );
    case 5:
      return (
        <Q5
          step={step}
          nextStep={nextStep}
          question={questions[4]}
          inputChange={inputChange}
        />
      );
    case 6:
      return (
        <Q6
          step={step}
          nextStep={nextStep}
          question={questions[5]}
          inputChange={inputChange}
        />
      );
    case 7:
      return (
        <Q7
          step={step}
          nextStep={nextStep}
          question={questions[6]}
          inputChange={inputChange}
        />
      );
    case 8:
      return (
        <Q8
          step={step}
          nextStep={nextStep}
          question={questions[7]}
          inputChange={inputChange}
        />
      );
    case 9:
      return (
        <Q9
          step={step}
          nextStep={nextStep}
          question={questions[8]}
          inputChange={inputChange}
        />
      );
    case 10:
      return (
        <Q10
          step={step}
          nextStep={nextStep}
          question={questions[9]}
          inputChange={inputChange}
        />
      );
    case 11:
      return (
        <Q11
          step={step}
          nextStep={nextStep}
          question={questions[10]}
          inputChange={inputChange}
        />
      );
    case 12:
      return (
        <Q12
          step={step}
          nextStep={finishStep}
          question={questions[11]}
          inputChange={inputChange}
        />
      );
    case 13:
      return <Result type={type} />;
    default:
      return;
  }
};

export default Questions;
