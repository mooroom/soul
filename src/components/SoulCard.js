import React from "react";
import cardItem from "../img/cardItem.svg";

const SoulCard = ({ img, hashTag, title, date }) => {
  return (
    <div className="soulCard">
      <div className="imgSection">
        <img src={cardItem} width="50px" />
      </div>
      <div className="txtSection">
        <p>{hashTag}</p>
        <p>{title}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default SoulCard;
