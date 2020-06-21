import React from "react";
import { useAuth, useFirestoreDocData, useFirestore } from "reactfire";
import Head from "./components/Head";
import BottomNav from "./components/BottomNav";

const Contents = ({ match }) => {
  console.log(match.params);
  const { eid } = match.params;
  let content;
  var firestore = useFirestore();
  var auth = useAuth();

  var user = auth.currentUser;
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);

  const contents = useFirestoreDocData(userDoc).myContents;
  contents.forEach((contentInfo) => {
    if (contentInfo.eid === eid) {
      content = contentInfo;
    }
  });

  const imgURL = `${content.imgURL2}`;

  const cImgStyle = {
    backgroundImage: `url(${imgURL})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Head title="컨텐츠 상세" />
      <div className="mainBox">
        <div className="cTitleBox">
          <div className="f-10 mb-2">{content.hashTag}</div>
          <div className="f-18">{content.title}</div>
        </div>

        <div className="cImgBox" style={cImgStyle}>
          <div className="f-14">{content.detail}</div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Contents;
