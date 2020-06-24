import React from "react";
import { withRouter } from "react-router-dom";
import goBackBtn from "../img/goBack.svg";
import "./Head.scss";

const Head = ({ title, history }) => {
  return (
    <div id="headerBox">
      <img src={goBackBtn} width="9px" onClick={() => history.push("/")} />
      <span id="title">{title}</span>
      <span id="ghost" />
    </div>
  );
};

export default withRouter(Head);
