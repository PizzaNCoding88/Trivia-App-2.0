import React from "react";
import "./Buttons.css";

const textSizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};
const Buttons = (props) => {
  const { name, click, textSize } = props;
  const className = `button ${textSizeClasses[textSize] || ""}`;
  return (
    <button className={className} onClick={click}>
      {name}
    </button>
  );
};

export default Buttons;
