import React from "react";
import {
  useAuth,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
} from "reactfire";
import Head from "./components/Head";
import BottomNav from "./components/BottomNav";

const Events = ({ match }) => {
  console.log(match.params);
  const { eid } = match.params;
  let event;
  var firebase = useFirebaseApp();
  var firestore = useFirestore();
  var auth = useAuth();

  var user = auth.currentUser;
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);

  const events = useFirestoreDocData(userDoc).myEvents;
  events.forEach((eventInfo) => {
    if (eventInfo.eid === eid) {
      event = eventInfo;
    }
  });

  const imgURL = `${event.imgURL2}`;

  const eImgStyle = {
    backgroundImage: `url(${imgURL})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const eType = event.eType;

  return (
    <div>
      <Head title="이벤트 상세" />
      <div className="mainBox">
        <div className="eImgBox mb-4" style={eImgStyle}>
          <div className="f-10">{event.hashTag}</div>
          <div className="f-18">{event.title}</div>
          <div className="f-12">{event.sub}</div>
        </div>
        <div className="p-20">
          <div className="eTypeBox mb-4">
            <div>이 이벤트는</div>
            <div className="itemBox">
              <div className="item">
                <div className="typeName f-12">관계지향</div>
                <div className={`circle ${eType[0] === 1 ? "red" : ""}`}></div>
                <div className={`circle ${eType[0] === 2 ? "red" : ""}`}></div>
                <div className={`circle ${eType[0] === 3 ? "red" : ""}`}></div>
                <div className={`circle ${eType[0] === 4 ? "red" : ""}`}></div>
                <div className={`circle ${eType[0] === 5 ? "red" : ""}`}></div>
              </div>
              <div className="item">
                <div className="typeName f-12">성찰적인</div>
                <div className={`circle ${eType[1] === 1 ? "red" : ""}`}></div>
                <div className={`circle ${eType[1] === 2 ? "red" : ""}`}></div>
                <div className={`circle ${eType[1] === 3 ? "red" : ""}`}></div>
                <div className={`circle ${eType[1] === 4 ? "red" : ""}`}></div>
                <div className={`circle ${eType[1] === 5 ? "red" : ""}`}></div>
              </div>
              <div className="item">
                <div className="typeName f-12">예술적인</div>
                <div className={`circle ${eType[2] === 1 ? "red" : ""}`}></div>
                <div className={`circle ${eType[2] === 2 ? "red" : ""}`}></div>
                <div className={`circle ${eType[2] === 3 ? "red" : ""}`}></div>
                <div className={`circle ${eType[2] === 4 ? "red" : ""}`}></div>
                <div className={`circle ${eType[2] === 5 ? "red" : ""}`}></div>
              </div>
              <div className="item">
                <div className="typeName f-12">활동적인</div>
                <div className={`circle ${eType[3] === 1 ? "red" : ""}`}></div>
                <div className={`circle ${eType[3] === 2 ? "red" : ""}`}></div>
                <div className={`circle ${eType[3] === 3 ? "red" : ""}`}></div>
                <div className={`circle ${eType[3] === 4 ? "red" : ""}`}></div>
                <div className={`circle ${eType[3] === 5 ? "red" : ""}`}></div>
              </div>
            </div>
          </div>
          <div className="eDetailBox">
            <div className="f-16 f-b mb-1">{event.sub2}</div>
            <div className="f-8 f-b blue mb-3">{event.date}</div>
            <div className="f-14 mb-4">{event.detail}</div>
            <div>
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                <button className="soul-btn">참여하기</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Events;
