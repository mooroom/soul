import React from "react";
import "./MyCard.scss";
import SoulCard from "../SoulCard";
import { Link } from "react-router-dom";

const MyCard = ({ active, url, recommended, onToggle, title }) => {
  return (
    <>
      <div id="myCardBox" className={`${active ? "active" : ""}`}>
        <div id="myCardTitle">{title}</div>
        {recommended.map((item) => (
          <div className="myCardCon mb-3">
            <Link to={`${url}/${item.eid}`}>
              <SoulCard
                key={item.eid}
                img={item.imgURL}
                hashTag={item.hashTag}
                title={item.title}
                date={item.date}
              />
            </Link>
          </div>
        ))}
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
