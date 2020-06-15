import React, { useContext } from "react";
import { Redirect } from "react-router";
import { useAuth, useFirestoreDocData, useFirestore } from "reactfire";
import Menu from "./components/Menu";

const Home = () => {
  var firestore = useFirestore();
  var auth = useAuth();

  var user = auth.currentUser;
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);

  const name = useFirestoreDocData(userDoc).uName;

  return (
    <div>
      <Menu />
      <h2>{name}님, 오늘 하루도 잘 버티고 계신가요?</h2>
      <button onClick={() => auth.signOut()}>로그아웃</button>
    </div>
  );
};

export default Home;
