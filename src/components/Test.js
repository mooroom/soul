import React, { useState } from "react";
import shapes from "../img/shapes.png";
import style from "styled-components";

const TestCard = style.div`
    background: white;
    border-radius: 15px;
    color: black;
    padding: 5px 30px 30px 30px;
    text-align: center
`;

const Test = () => {
  const [state, setState] = useState({
    step: 1,
    relation: "",
    active: "",
    art: "",
    reflect: "",
    checkedVal: "",
  });

  const { step, checkedVal } = state;

  const nextStep = () => {
    setState({ step: step + 1 });
  };

  const onChange = (e) => {
    setState({ checkedVal: e.target.value });
  };

  const question = (step) => {
    switch (step) {
      case 1:
        console.log(step);
        return "나는 우울할 때 일부러 사람을 만나는 편이다. ";
      case 2:
        return "나는 나의 상태에 누군가 관심을 가져줬으면 좋겠다. ";
      case 3:
        return "혼자 있으면 우울에 침잠 되는 기분이 든다.  ";
      case 4:
        return "몸을 움직이는 게 기분 전환에 도움이 된다. ";
      case 5:
        return "운동을 꾸준히 해 본 경험이 있다. ";
      case 6:
        return "하루 평균 6000보 이상 걷는다. ";
      case 7:
        return "내 취향의 음악을 찾고 듣는 것을 좋아한다. ";
      case 8:
        return "미술 전시, 작품 보는 것을 좋아한다. ";
      case 9:
        return "영상미 넘치는 영상을 유튜브에서 즐겨 본다. ";
      case 10:
        return "나는 내 이야기를 다른 사람에게 하는 것을 좋아한다. ";
      case 11:
        return "일기, 글 쓰기를 통해 내 생각을 잘 표현하는 편이다. ";
      case 12:
        return "주변 사람들은 내 일상과 생각에 대해 잘 알고 있다. ";
      default:
        return;
    }
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
        <h2>{console.log(checkedVal)}</h2>
        <p>{question(step)}</p>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value={checkedVal}
            onChange={onChange}
          />
          <label class="form-check-label" for="inlineCheckbox1">
            1
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            2
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
          />
          <label class="form-check-label" for="inlineCheckbox3">
            3
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
      </TestCard>
    </div>
  );
};

export default Test;
