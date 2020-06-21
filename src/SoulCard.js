import React from "react";
import { Link } from "react-router-dom";

const SoulCard = ({ img, hashTag, title, date }) => {
  return (
    <div className="soulCard">
      <div className="imgSection">
        <img src={img} />
      </div>
      <div className="txtSection">
        <div className="f-8">{hashTag}</div>
        <div className="f-14">{title}</div>
        <div className="f-8">{date}</div>
      </div>
    </div>
  );
};

export default SoulCard;
