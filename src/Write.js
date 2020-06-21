import React, { useState } from "react";
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

  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  const handleArchive = () => {};

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div>
      <Head title="데일리 아카이브" />
      <div className="mainBox">
        <ProfileCard profile={profile} name={name} type={type} />
        <div id="addEmotionBox" className="mt-4">
          <div className="f-18 mb-4">오늘의 기분을 기록하세요</div>
          <img src={addBtn} width="35px" onClick={() => handleActive()} />
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
      <div id="writeBox" className={active ? "active" : ""}>
        <div className="f-18 mb-4">오늘의 나는?</div>
        <div id="diaryCard">
          <div className="f-14 black text-center mb-3">{dateString}</div>
          <button onClick={handleActive}>x</button>
          <form onSubmit={handleArchive} className="text-center">
            <textarea
              className="form-control mb-2"
              placeholder="텍스트를 입력하세요"
              rows="3"
            ></textarea>
            <button className="soul-btn-blue" type="submit">
              등록
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Write;
