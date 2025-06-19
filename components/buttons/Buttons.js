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
  const { name, click, textSize, start, finish, padding, selected } = props;
  const gradients = {
    background: `linear-gradient(to right, ${start}, ${finish})`,
    paddingInline: padding ? `${padding}rem` : undefined,
  };
  const className = `button transition-all duration-100 ${
    textSizeClasses[textSize] || ""
  } ${selected ? "border-2 border-white" : "border-0 border-transparent"}`;
  return (
    <button className={className} style={gradients} onClick={click}>
      {name}
    </button>
  );
};

export default Buttons;
