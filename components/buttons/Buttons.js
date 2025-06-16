import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  const { name, click, textSize } = props;
  const className = `button ${textSize ? ` text-${textSize}` : ""}`;
  return <button className={className}>{name}</button>;
};

export default Buttons;
