import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  const { name, click } = props;
  return <button className="button">{name}</button>;
};

export default Buttons;
