import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor,childrenColor, setChildrenColor }) {

  function handleParentChange(){
    const newRandomColor = getRandomColor();
    onChangeColor(newRandomColor);
  }

  function handleSiblingChange(){
    const newRandomColor = getRandomColor();
    setChildrenColor(newRandomColor);
  }
  
  return <div className="child" 
  style={{ backgroundColor: childrenColor }} 
  onClick={()=>{handleParentChange(); handleSiblingChange()}}
  />;
}

export default Child;
