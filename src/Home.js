import React, { useContext } from "react";
import { Redirect } from "react-router";
import { useAuth, useFirestoreDocData, useFirestore } from "reactfire";
import Menu from "./components/Menu";
import "./App.scss";
import logo from "./img/logo.svg";
import Slider from "infinite-react-carousel";

const Home = () => {
  var firestore = useFirestore();
  var auth = useAuth();

  var user = auth.currentUser;
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);

  const name = useFirestoreDocData(userDoc).uName;

  const settings = {
    arrows: false,
    autoplay: true,
    dots: false,
  };
  return (
    <>
      <Menu name={name} />
      <div className="container">
        <img className="mb-3" src={logo} width="70px" />
        <h5>{name}님,</h5>
        <h5>오늘도 잘 버티고 계신가요?</h5>

        <div className="todayBox">
          <h6>{name}을 위한 오늘의 추천 컨텐츠</h6>

          <div className="soulCard">
            <div className="imgSection">
              <img src={logo} width="50px" />
            </div>
            <div className="txtSection">
              <p>#에세이#새벽#사랑</p>
              <p>사람을 대하는 가장 적정한 온도, [나의 친애하는 적] 허지웅</p>
              <p>2020.06.20</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
