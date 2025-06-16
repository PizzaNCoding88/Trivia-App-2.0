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
  const { name, click, textSize, start, finish } = props;
  const gradients = {
    background: `linear-gradient(to right, ${start}, ${finish})`,
  };
  const className = `button ${textSizeClasses[textSize] || ""}`;
  return (
    <button className={className} style={gradients} onClick={click}>
      {name}
    </button>
  );
};

export default Buttons;
