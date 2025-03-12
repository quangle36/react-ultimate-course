import { useState } from "react";
import styles from "./QuangColorBox.module.css";
enum Colors {
  AQUA = "AQUA",
  RED = "RED",
  YELLOW = "YELLOW",
  PURPLE = "PURPLE",
}
const QuangColorBox = () => {
  const [activeColor, setActiveColor] = useState("default");

  const boxes = [
    {
      color: Colors.AQUA,
      label: "Aqua",
    },
    {
      color: Colors.RED,
      label: "Red",
    },
    {
      color: Colors.YELLOW,
      label: "Yellow",
    },
    {
      color: Colors.PURPLE,
      label: "Purple",
    },
  ];

  const handleOnClickBox = (color: Colors) => {
    console.log("color", color);
    setActiveColor(color);
    if (color === activeColor) {
      setActiveColor("default");
    }
  };
  return (
    <>
      <div>Current color {activeColor}</div>
      <div className={styles.wrapper}>
        {boxes.map((box) => (
          <div
            style={{
              backgroundColor:
                activeColor === "default" ? box.color : activeColor,
            }}
            onClick={() => handleOnClickBox(box.color)}
            className={styles["box-container"]}
          >
            {box.label}
          </div>
        ))}
      </div>
    </>
  );
};

export default QuangColorBox;
