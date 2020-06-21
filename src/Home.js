import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { useAuth, useFirestoreDocData, useFirestore } from "reactfire";
import Menu from "./components/Menu";
import "./App.scss";
import logo from "./img/logo.svg";
import Slider from "infinite-react-carousel";
import SoulCard from "./SoulCard";
import BottomNav from "./components/BottomNav";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  var firestore = useFirestore();
  var auth = useAuth();

  var user = auth.currentUser;
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);

  const name = useFirestoreDocData(userDoc).uName;
  const events = useFirestoreDocData(userDoc).myEvents;
  const contents = useFirestoreDocData(userDoc).myContents;

  return (
    <>
      <Menu name={name} />
      <BottomNav />
      <div className="container-flex">
        <img className="mb-3" src={logo} width="70px" />
        <h5>{name}님,</h5>
        <h5 className="mb-5">오늘도 잘 버티고 계신가요?</h5>
        <div className="todayBoxTitle f-16 f-b">
          {name}님을 위한 오늘의 추천 이벤트
        </div>
        <Carousel indicators={false} className="todayBox mb-4" controls={false}>
          {events.map((event) => (
            <Carousel.Item>
              <Link to={`events/${event.eid}`}>
                <SoulCard
                  key={event.eid}
                  img={event.imgURL}
                  hashTag={event.hashTag}
                  title={event.title}
                  date={event.date}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="todayBoxTitle f-16 f-b">
          {name}님을 위한 오늘의 추천 컨텐츠
        </div>
        <Carousel indicators={false} className="todayBox" controls={false}>
          {contents.map((content) => (
            <Carousel.Item>
              <Link to={`contents/${content.eid}`}>
                <SoulCard
                  key={content.eid}
                  img={content.imgURL}
                  hashTag={content.hashTag}
                  title={content.title}
                  date={content.date}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Home;
