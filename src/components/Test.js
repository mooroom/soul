import React, { useState, useRef } from "react";
import shapes from "../img/shapes.png";
import style from "styled-components";
import Questions from "./Questions";

const TestCard = style.div`
    background: white;
    border-radius: 15px;
    color: black;
    padding: 5px 30px 30px 30px;
    text-align: center
`;

const Test = () => {
  return (
    <div className="container">
      <img
        src={shapes}
        width="236"
        alt="logo"
        style={{ marginBottom: "75px" }}
      />
      <TestCard>
        <Questions />
      </TestCard>
    </div>
  );
};

export default Test;
