import React from "react";

interface Box {
  color: string;
  id: string;
}

const DatColorBox = () => {
  const [number, setNumber] = React.useState(0);
  const [boxes, setBoxes] = React.useState<Box[]>([]);

  // Random color
  const randomBoxColor = () => {
    return `#${Math.floor(Math.random() * (256 * 256 * 256)).toString(16)}`;
  };

  // Get number box
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(0, Number(e.target.value));
    setNumber(val);
  };

  // Create box
  const createBox = () => {
    const newBoxes: Box[] = Array.from({ length: number }, () => ({
      color: randomBoxColor(),
      id: randomBoxColor(),
    }));
    setBoxes(newBoxes);
    // console.log(boxes);
  };

  // Change Color 1 box
  const changeBoxColor = (index: number) => {
    const newBoxes = [...boxes];
    newBoxes[index].color = randomBoxColor();
    setBoxes(newBoxes); //
  };

  return (
    <>
      <h1>Dat GenerateBox</h1>
      <div>
        Number of boxes to create:
        <input
          type="number"
          min={1}
          max={20}
          value={number <= 0 ? "" : number}
          onChange={handleChange}
        />
        <button onClick={createBox}>Generate</button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {boxes.map((box, index) => (
          <div
            key={box.id + index}
            onClick={() => changeBoxColor(index)}
            style={{
              background: box.color,
              height: "80px",
              width: "100px",
              margin: "10px",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default DatColorBox;
