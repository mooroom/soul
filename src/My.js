import React, { useState } from "react";
import Head from "./components/Head";
import "./App.scss";
import "./My.scss";
import profile from "./img/profile.svg";
import { useAuth, useFirestoreDocData, useFirestore } from "reactfire";
import { Link } from "react-router-dom";
import MyCard from "./components/MyCard";
import ProfileCard from "./ProfileCard";

const My = () => {
  var firestore = useFirestore();
  var auth = useAuth();

  var user = auth.currentUser;
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);

  const name = useFirestoreDocData(userDoc).uName;
  const type = useFirestoreDocData(userDoc).myType;

  const [activeEvent, setActiveEvent] = useState(false);
  const onToggleEvent = () => {
    setActiveEvent(!activeEvent);
  };
  const [activeContents, setActiveContents] = useState(false);
  const onToggleContents = () => {
    setActiveContents(!activeContents);
  };
  return (
    <div>
      <Head title="마이페이지" />
      <div className="mainBox">
        <ProfileCard profile={profile} name={name} type={type} />
        <div id="btnBox">
          <Link to="/test">
            <button className="btn soul-red">테스트 다시하기</button>
          </Link>
        </div>
        <div className="listBox">
          <div className="listItem" onClick={onToggleEvent}>
            나의 이벤트
          </div>
          <div className="listItem" onClick={onToggleContents}>
            내가 좋아한 컨텐츠
          </div>
          <div className="listItem" onClick={() => auth.signOut()}>
            로그아웃
          </div>
        </div>
      </div>
      <MyCard
        active={activeEvent}
        onToggle={onToggleEvent}
        title="나의 이벤트"
      />
      <MyCard
        active={activeContents}
        onToggle={onToggleContents}
        title="내가 좋아한 컨텐츠"
      />
    </div>
  );
};

export default My;
