import React from "react";

const SoulCard = ({ img, hashTag, title, date }) => {
  return (
    <div className="soulCard">
      <div className="imgSection">
        <img src={img} alt="img" />
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
