import React from "react";
import "./ProfileCard.scss";

const ProfileCard = ({ profile, name, type }) => {
  return (
    <div id="profileCard">
      <div id="imgSection">
        <img src={profile} />
      </div>
      <div id="txtSection">
        <div id="name">{name}</div>
        <div id="type">{type}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
