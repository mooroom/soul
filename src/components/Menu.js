import React, { useState } from "react";
import styled from "styled-components";
import "./Menu.css";

const Menu = () => {
  const [active, setActive] = useState(false);
  const onToggle = () => {
    setActive(!active);
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        id="menuBtn"
        onClick={onToggle}
      ></button>
      <div
        id="pageWrapper"
        className={`${active ? "active" : ""}`}
        onClick={onToggle}
      ></div>
    </div>
  );
};

export default Menu;
