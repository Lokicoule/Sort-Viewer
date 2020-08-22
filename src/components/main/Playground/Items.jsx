import React from "react";
import InfoBar from "./InfoBar";
import Item from "./Item";

const Items = ({ model, width, height, fontSize }) => {
  return (
    <div
      style={{
        width: `${width}%`,
        backgroundColor: "#114b5f",
      }}
    >
      {model.items &&
        model.items.map((item, index) => (
          <Item
            key={index}
            value={item.value}
            height={height}
            state={item.state}
            fontSize={fontSize}
          >
            <span
              style={{ position: "absolute", paddingTop: `${height / 5}px` }}
            >
              {item.value}
            </span>
          </Item>
        ))}
      <InfoBar position="static" model={model} />
    </div>
  );
};

export default Items;
