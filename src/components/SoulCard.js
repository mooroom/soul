import React from "react";

const SoulCard = ({ img, hashTag, title, date }) => {
  return (
    <div className="soulCard">
      <div className="imgSection">
        <img src={img} width="50px" />
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
