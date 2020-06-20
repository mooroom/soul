import React, { useState, useRef } from "react";
import shapes from "../img/shapes.svg";
import style from "styled-components";
import Questions from "./Questions";

const Test = () => {
  return (
    <div className="container">
      <div id="logoBox">
        <img src={shapes} width="236" alt="logo" />
      </div>
      <div id="loginBox">
        <Questions />
      </div>
    </div>
  );
};

export default Test;
