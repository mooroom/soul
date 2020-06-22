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
import archiveImg from "./img/archive_1.png";

const Write = ({ history }) => {
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

  const handleUpload = (e) => {
    e.preventDefault();
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

    console.log(dateString);
  };

  const onSubmit = () => {
    userDoc.set({
      storedEvent: text,
    });
  };

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
        <div id="archiveBox">
          <div id="archiveBoxSub">
            <div className="f-14 mb-2">{dateString}</div>
            <div className="titleBox mb-3">
              <div className="colorItem d-yellow mr-2"></div>
              <div className="f-18">밤새워 과제를 했다.</div>
            </div>
            <div className="f-16 mb-4">
              밤새워 과제를 했다. 해가 뜨는 걸 봤는데 허무하고 화나던 여느때와
              다르게 기분이 좋았다. 아침에 잠이 드는 건 힘들지만 이유가 있는
              밤이 그렇지 않은 날보다는 편안하다. 유난히 긴 밤들은 해가 그렇게
              반갑던데 그보단 그래도 해가 밉더라도 안 아픈 날이 낫지. 하는
              생각을 했다.
            </div>
            <img src={archiveImg} alt="img" width="100%" />
          </div>
        </div>
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
              <label htmlFor="file">사진 선택</label>
              {/* <button className="soul-btn" onClick={handleUpload}>
                업로드
              </button> */}
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
