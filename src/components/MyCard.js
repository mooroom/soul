import React from "react";
import "./MyCard.scss";
import SoulCard from "./SoulCard";

const MyCard = ({ active, onToggle, title }) => {
  return (
    <>
      <div id="myCardBox" className={`${active ? "active" : ""}`}>
        <div id="myCardTitle">{title}</div>
        <SoulCard />
        <SoulCard />
        <SoulCard />
      </div>
      <div
        id="pageWrapper"
        className={`${active ? "active" : ""}`}
        onClick={onToggle}
      ></div>
    </>
  );
};

export default MyCard;
