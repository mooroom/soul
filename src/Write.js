import React from "react";
import Head from "./components/Head";
import { useAuth, useFirestoreDocData, useFirestore } from "reactfire";
import ProfileCard from "./ProfileCard";
import profile from "./img/profile.svg";
import addBtn from "./img/add.svg";
import Carousel from "react-bootstrap/Carousel";

const Write = () => {
  var firestore = useFirestore();
  var auth = useAuth();

  var user = auth.currentUser;
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);

  const name = useFirestoreDocData(userDoc).uName;
  const type = useFirestoreDocData(userDoc).myType;
  return (
    <div>
      <Head title="데일리 아카이브" />
      <div className="mainBox">
        <ProfileCard profile={profile} name={name} type={type} />
        <div id="addEmotionBox" className="mt-4">
          <div className="f-18 mb-4">오늘의 기분을 기록하세요</div>
          <img src={addBtn} width="35px" />
        </div>
        <Carousel indicators={false} className="mt-5">
          <Carousel.Item>
            <h1>Hello</h1>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Heloo</h1>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Heloo</h1>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <div id="writeBox">
        <div className="f-18 mb-4">오늘의 나는?</div>
      </div> */}
    </div>
  );
};

export default Write;
