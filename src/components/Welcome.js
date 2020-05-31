import React from "react";
import { Link } from "react-router-dom";
import shapes from "../img/shapes.png";

const Welcome = () => {
  return (
    <div className="container">
      <img
        src={shapes}
        width="236"
        alt="logo"
        style={{ marginBottom: "75px" }}
      />
      <h3 style={{ marginBottom: "30px" }}>환영합니다!</h3>
      <div style={{ width: "280px", fontSize: ".85rem", marginBottom: "40px" }}>
        <p>
          소울은 설문을 통해 사용자의 우울감 양상을 분류하고, 이에 적합한
          이벤트와 컨텐츠를 큐레이션 합니다.
        </p>
        <p>
          질문에 많이 답할 수록 정확한 유형 분석이 가능해 집니다. 원하면 언제든
          설문을 그만두실 수도 있고, 서비스를 이용하던 중 언제든 다시 설문을
          진행하실 수도 있습니다.
        </p>
      </div>
      <Link to="/test">
        <button type="button" className="btn btn-light">
          테스트하기
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
