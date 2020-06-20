import React, { useContext } from "react";
import { Redirect } from "react-router";
import { useAuth, useFirestoreDocData, useFirestore } from "reactfire";
import Menu from "./components/Menu";
import "./App.scss";
import logo from "./img/logo.svg";
import Slider from "infinite-react-carousel";
import SoulCard from "./components/SoulCard";
import BottomNav from "./components/BottomNav";
import Carousel from "react-bootstrap/Carousel";

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
      <BottomNav />

      <img className="mb-3" src={logo} width="70px" />
      <h5>{name}님,</h5>
      <h5>오늘도 잘 버티고 계신가요?</h5>

      <Carousel indicators={false} className="todayBox" controls={false}>
        {events.map((event) => (
          <Carousel.Item>
            <SoulCard
              key={event.eid}
              img={event.imgURL}
              hashTag={event.hashTag}
              title={event.title}
              date={event.date}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Carousel indicators={false} className="todayBox" controls={false}>
        {contents.map((content) => (
          <Carousel.Item>
            <SoulCard
              key={content.eid}
              img={content.imgURL}
              hashTag={content.hashTag}
              title={content.title}
              date={content.date}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Home;
