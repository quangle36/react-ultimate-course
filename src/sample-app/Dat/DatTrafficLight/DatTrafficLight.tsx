import React from "react";
import "./DatTrafficLight.css";

enum TrafficLight {
  RED = "RED",
  YELLOW = "YELLOW",
  GREEN = "GREEN",
}

const DatTrafficLight = () => {
  const [activeColor, setActiveColor] = React.useState(TrafficLight.GREEN);

  return (
    <div>
      <h1>Dat Traffic Light</h1>

      <div className="traffic_container">
        <div className="traffic-light-container traffic-light-container--vertical">
          <div className="traffic-light" style={{ backgroundColor: "red" }} />
          <div className="traffic-light" style={{ backgroundColor: "yellow" }} />
          <div className="traffic-light" style={{ backgroundColor: "green" }} />
        </div>
      </div>
    </div>
  );
};

export default DatTrafficLight;
