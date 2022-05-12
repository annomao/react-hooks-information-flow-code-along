import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor,childrenColor}) {

  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return <div className="child" 
  style={{ backgroundColor: childrenColor }} 
  onClick={handleClick}
  />;
}

export default Child;
