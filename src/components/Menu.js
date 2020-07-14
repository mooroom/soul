import React, { useState } from "react";
import styled from "styled-components";
import "./Menu.scss";
import profile from "../img/profile.svg";
import { useFirestore, useAuth, useFirestoreDocData, useUser } from "reactfire";
import { Link } from "react-router-dom";

const Menu = ({ name }) => {
  var firestore = useFirestore();
  var auth = useAuth();
  var user = useUser();
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);
  const [active, setActive] = useState(false);
  const onToggle = () => {
    setActive(!active);
  };
  const myDiaryCount = useFirestoreDocData(userDoc).myDiary.length;

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
          <h6>감정기록 {myDiaryCount}회</h6>
        </div>
        <div id="infoBox2">
          <h6>연계기관 보기</h6>
          <a href="https://instagram.com/soul.for.only?igshid=1nxm7uadujnmz">
            <h6 className="mb-5">고객센터</h6>
          </a>

          <h6 onClick={() => auth.signOut()}>로그아웃</h6>
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
