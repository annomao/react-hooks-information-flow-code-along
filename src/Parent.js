import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={setColor} childrenColor={childrenColor} setChildrenColor={setChildrenColor}/>
      <Child onChangeColor={setColor} childrenColor={childrenColor} setChildrenColor={setChildrenColor}/>
    </div>
  );
}

export default Parent;
