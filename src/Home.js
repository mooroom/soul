import React, { useContext } from "react";
import { Redirect } from "react-router";
import { useAuth, useFirestoreDocData, useFirestore } from "reactfire";
import Menu from "./components/Menu";
import "./App.scss";
import logo from "./img/logo.svg";
import Slider from "infinite-react-carousel";
import SoulCard from "./components/SoulCard";

const Home = () => {
  var firestore = useFirestore();
  var auth = useAuth();

  var user = auth.currentUser;
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);

  const name = useFirestoreDocData(userDoc).uName;
  const events = useFirestoreDocData(userDoc).myEvents;
  const contents = useFirestoreDocData(userDoc).myContents;

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
          <h6>{name}을 위한 오늘의 추천 이벤트</h6>
          {events.map((event) => (
            <SoulCard
              key={event.eid}
              img={event.imgURL}
              hashTag={event.hashTag}
              title={event.title}
              date={event.date}
            />
          ))}
        </div>
        <div className="todayBox">
          <h6>{name}을 위한 오늘의 추천 컨텐츠</h6>
          {contents.map((content) => (
            <SoulCard
              key={content.eid}
              img={content.imgURL}
              hashTag={content.hashTag}
              title={content.title}
              date={content.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
