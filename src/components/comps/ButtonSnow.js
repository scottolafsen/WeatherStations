import React from "react";
import { SnowDiffColor, SnowColor } from "./ObColor";

const SnowButton = props => {
  // const

  const current = props.data[props.data.length - 1];
  const threeHour = props.data[props.data.length - 3];
  const sixHour = props.data[props.data.length - 6];
  return (
    <div className="small ui icon buttons">
      <button
        className="medium ui icon button"
        id={SnowColor(current)}
        onClick={() => {
          // id = "marker-button-select";
          props.selectStation(props.station);
        }}
      >
        {Math.round(current) + props.unit}
      </button>
      <button
        className="small ui icon button"
        id={SnowDiffColor(Math.round(current - threeHour))}
      >
        {Math.round(current - threeHour) + props.unit}
      </button>
      <button
        className="small ui icon button"
        id={SnowDiffColor(Math.round(current - sixHour))}
      >
        {Math.round(current - sixHour) + props.unit}
      </button>
    </div>
  );
};

export default SnowButton;
