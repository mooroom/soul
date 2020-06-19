import React from "react";
import { Link } from "react-router-dom";
import my from "../img/icon_my.svg";
import home from "../img/icon_home.svg";
import write from "../img/icon_write.svg";
import "./BottomNav.scss";

const BottomNav = () => {
  return (
    <div id="navBox">
      <Link to="/my">
        <img src={my} alt="myImg" />
      </Link>
      <Link to="/">
        <img src={home} alt="homeImg" />
      </Link>
      <Link to="/write">
        <img src={write} alt="writeImg" />
      </Link>
    </div>
  );
};

export default BottomNav;
