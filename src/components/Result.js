import React, { useContext } from "react";
import { AuthContext } from "../Auth";
import { useFirestore } from "reactfire";
import { Link } from "react-router-dom";

const Result = ({ type }) => {
  let typeMerge = type.join("");

  let myType;
  let myTypeDetail;

  switch (typeMerge) {
    case "ABCD":
      myType = "1번타입";
      myTypeDetail = "1번타입니다.";
      break;
    case "nABCD":
      myType = "2번타입";
      myTypeDetail = "2번타입니다.";
      break;
    case "AnBCD":
      myType = "3번타입";
      myTypeDetail = "3번타입니다.";
      break;
    case "ABnCD":
      myType = "4번타입";
      myTypeDetail = "4번타입니다.";
      break;
    case "ABCnD":
      myType = "5번타입";
      myTypeDetail = "5번타입니다.";
      break;
    case "nAnBCD":
      myType = "6번타입";
      myTypeDetail = "6번타입니다.";
      break;
    case "nABnCD":
      myType = "7번타입";
      myTypeDetail = "7번타입니다.";
      break;
    case "nABCnD":
      myType = "8번타입";
      myTypeDetail = "8번타입니다.";
      break;
    case "AnBnCD":
      myType = "9번타입";
      myTypeDetail = "9번타입니다.";
      break;
    case "AnBCnD":
      myType = "10번타입";
      myTypeDetail = "10번타입니다.";
      break;
    case "ABnCnD":
      myType = "11번타입";
      myTypeDetail = "11번타입니다.";
      break;
    case "nAnBnCD":
      myType = "12번타입";
      myTypeDetail = "12번타입니다.";
      break;
    case "nAnBCnD":
      myType = "13번타입";
      myTypeDetail = "13번타입니다.";
      break;
    case "nABnCnD":
      myType = "14번타입";
      myTypeDetail = "14번타입니다.";
      break;
    case "AnBnCnD":
      myType = "15번타입";
      myTypeDetail = "15번타입니다.";
      break;
    case "nAnBnCnD":
      myType = "16번타입";
      myTypeDetail = "16번타입니다.";
      break;
  }

  const firestore = useFirestore();
  const { currentUser } = useContext(AuthContext);

  const onClick = () => {
    console.log(currentUser.uid);
    firestore
      .collection("user")
      .doc(`${currentUser.uid}`)
      .update({ myType: myType });
  };
  return (
    <div>
      <h2>유형테스트 결과</h2>
      <h3>{myType}</h3>
      <p>{myTypeDetail}</p>
      <Link to="/">
        <button className="btn btn-secondary" onClick={onClick}>
          프로필 만들기
        </button>
      </Link>
    </div>
  );
};

export default Result;
