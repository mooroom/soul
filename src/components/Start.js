import React from "react";
import logoType from "../img/logoType.svg";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="container-flex">
      <img
        src={logoType}
        width="77"
        alt="logo"
        style={{ marginBottom: "142px" }}
      />
      <Link to="/welcome">
        <button type="button" className="soul-btn">
          시작하기
        </button>
      </Link>
    </div>
  );
};

export default Start;
