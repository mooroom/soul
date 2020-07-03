import React, { useState, useCallback } from "react";
import Head from "./components/Head";
import {
  useAuth,
  useFirestoreDocData,
  useFirestore,
  useStorage,
} from "reactfire";
import ProfileCard from "./ProfileCard";
import profile from "./img/profile.svg";
import addBtn from "./img/add.svg";
import Carousel from "react-bootstrap/Carousel";
import { withRouter } from "react-router-dom";
import * as firebase from "firebase";

const Write = ({ history }) => {
  var firestore = useFirestore();
  var auth = useAuth();
  var storage = useStorage();

  var user = auth.currentUser;
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);

  const name = useFirestoreDocData(userDoc).uName;
  const type = useFirestoreDocData(userDoc).myType;
  const myDiary = useFirestoreDocData(userDoc).myDiary;

  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // const [inputs, setInputs] = useState({
  //   text: "",
  // });
  // const { text } = inputs;
  // const onChange = (e) => {
  //   const { value, name } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };

  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  //사진업로드
  const [imgBase64, setImgBase64] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleFileChange = (e) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);
    }
  };

  //d-color 설정
  const [dColor, setDColor] = useState("");

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  const handleDiaryData = (txt, color) => {
    userDoc.update({
      myDiary: firebase.firestore.FieldValue.arrayUnion({
        date: dateString,
        txt: txt,
        // img: url,
        color: color,
      }),
    });
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { text, color } = event.target.elements;
      try {
        await handleDiaryData(text.value, color.value);
        setText("");
        setDColor("");
        history.push("/write");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  //colorHistroy Css 설정
  let colorString = "";
  let count = 0;

  myDiary.forEach((diary) => {
    let colorCode = "";
    switch (diary.color) {
      case "d-white":
        colorCode = "#ffffff";
        break;
      case "d-yellow":
        colorCode = "#eee200";
        break;
      case "d-red":
        colorCode = "#e61f5f";
        break;
      case "d-purple":
        colorCode = "#3c368a";
        break;
      case "d-blue":
        colorCode = "#74c8e3";
        break;
      case "d-green":
        colorCode = "#2baf8a";
        break;
      case "d-black":
        colorCode = "#000000";
        break;
      default:
        return;
    }

    colorString =
      count !== myDiary.length - 1
        ? colorString + colorCode + ","
        : colorString + colorCode;
    count += 1;
  });

  let colorCss = { background: `linear-gradient(90deg, ${colorString})` };

  return (
    <div>
      <Head title="데일리 아카이브" />
      <div className="mainBox">
        <ProfileCard profile={profile} name={name} type={type} />
        <div id="addEmotionBox" className="mt-4">
          <div className="f-18 mb-4">오늘의 기분을 기록하세요</div>
          <img
            src={addBtn}
            width="35px"
            onClick={() => handleActive()}
            alt="addBtn"
          />
        </div>
        <div className="f-14 f-b mt-4 text-center">그간의 날들 돌아보기</div>
        <div className="paddingBox mt-4">
          <div id="colorHistory" style={colorCss}></div>
        </div>
        <Carousel id="archiveBox" indicators={false} controls={false}>
          {myDiary[0]
            ? myDiary.map((diary) => (
                <Carousel.Item>
                  <div
                    id="archiveBoxSub"
                    className={
                      diary.color
                        ? `colorItem d-yellow mr-2 ${diary.color}`
                        : "colorItem d-yellow mr-2"
                    }
                  >
                    <div className="f-14 mb-2 f-b">{diary.date}</div>
                    <div className="titleBox mb-3"></div>
                    <div className="f-16 mb-4">{diary.txt}</div>
                  </div>
                </Carousel.Item>
              ))
            : null}
        </Carousel>
      </div>
      <div id="writeBox" className={active ? "active" : ""}>
        <div className="f-18 mb-4">오늘의 나는?</div>
        <div id="diaryCard" className={dColor}>
          <div id="diaryCardSub">
            <div id="diaryCardHeader" className="mb-2">
              <div className="f-16 black d-inline">{dateString}</div>
              <span className="closeBtn" onClick={handleActive}>
                닫기
              </span>
            </div>
            <form id="diaryForm" onSubmit={onSubmit}>
              <textarea
                name="text"
                type="text"
                className="form-control mb-2"
                placeholder="텍스트를 입력하세요"
                onChange={onChangeText}
                value={text}
                rows="5"
              ></textarea>
              {/* <input
                type="file"
                name="file"
                id="file"
                className="inputfile"
                onChange={handleFileChange}
              />
              <label htmlFor="file">사진 선택</label>
              <img src={imgBase64} width="100%" className="mb-3" /> */}
              <div id="colorBox" className="mb-4">
                <div
                  className="colorItem d-yellow"
                  name="yellow"
                  onClick={() => setDColor("d-yellow")}
                ></div>
                <div
                  className="colorItem d-red"
                  name="red"
                  onClick={() => setDColor("d-red")}
                ></div>
                <div
                  className="colorItem d-purple"
                  name="purple"
                  onClick={() => setDColor("d-purple")}
                ></div>
                <div
                  className="colorItem d-blue"
                  name="blue"
                  onClick={() => setDColor("d-blue")}
                ></div>
                <div
                  className="colorItem d-green"
                  name="green"
                  onClick={() => setDColor("d-green")}
                ></div>
                <div
                  className="colorItem d-black"
                  name="black"
                  onClick={() => setDColor("d-black")}
                ></div>
                <input type="hidden" name="color" value={dColor} />
              </div>
              <button
                className="soul-btn-blue"
                type="submit"
                onClick={handleActive}
              >
                등록
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Write);
