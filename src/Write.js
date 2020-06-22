import React, { useState } from "react";
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

const Write = () => {
  var firestore = useFirestore();
  var auth = useAuth();
  var storage = useStorage();

  var user = auth.currentUser;
  var uid = user.uid;
  var userDoc = firestore.collection("user").doc(uid);

  const name = useFirestoreDocData(userDoc).uName;
  const type = useFirestoreDocData(userDoc).myType;

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
    e.preventDefault();
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

  //d-color 설정
  const [dColor, setDColor] = useState("");

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
        <div id="diaryCard" className={dColor}>
          <div id="diaryCardSub">
            <div id="diaryCardHeader mb-4">
              <div className="f-16 black">{dateString}</div>
              <button onClick={handleActive} className="black f-10">
                닫기
              </button>
            </div>
            <form id="diaryForm" onSubmit={handleUpload}>
              <textarea
                className="form-control mb-2"
                placeholder="텍스트를 입력하세요"
                rows="5"
                onChange={handleTextChange}
                value={text}
              ></textarea>
              <input
                type="file"
                name="file"
                id="file"
                className="inputfile"
                onChange={handleFileChange}
              />
              <label for="file">사진 업로드</label>
              <img src={imgBase64} width="100%" className="mb-3" />
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
              </div>
              <button className="soul-btn-blue" type="submit">
                등록
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
