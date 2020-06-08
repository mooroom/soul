import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="container">
      <img src={logo} width="77" alt="logo" style={{ marginBottom: "142px" }} />
      <Link to="/welcome">
        <button type="button" className="btn btn-light">
          시작하기
        </button>
      </Link>
    </div>
  );
};

export default Start;
