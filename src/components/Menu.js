import React, { useState } from "react";
import styled from "styled-components";
import "./Menu.scss";
import profile from "../img/profile.svg";
import { useAuth } from "reactfire";

const Menu = ({ name }) => {
  const [active, setActive] = useState(false);
  const onToggle = () => {
    setActive(!active);
  };
  var auth = useAuth();

  return (
    <div>
      <div id="menuBtn" onClick={onToggle}>
        <div id="top"></div>
        <div id="middle"></div>
        <div id="bottom"></div>
      </div>
      <div id="menuBox" className={`${active ? "active" : ""}`}>
        <img className="mb-3" src={profile} width="70px" />
        <h6>
          <b>{name}</b>
        </h6>
        <h6 className="mb-5">소울 새내기</h6>
        <div id="infoBox">
          <h6 className="mb-2">이벤트 참여 6회</h6>
          <h6>감정기록 15회</h6>
        </div>
        <div id="infoBox2">
          <h6>연계기관 보기</h6>
          <h6 className="mb-5">고객센터</h6>
          <button className="btn btn-light" onClick={() => auth.signOut()}>
            로그아웃
          </button>
        </div>
      </div>
      <div
        id="pageWrapper"
        className={`${active ? "active" : ""}`}
        onClick={onToggle}
      ></div>
    </div>
  );
};

export default Menu;
