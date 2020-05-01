import React from "react";
import TempColor from "./ObColor";

const TempButton = props => {
  // data = props.data1;
  // unit = props.unit1;
  return (
    <div className="ui icon buttons">
      <button
        className="medium ui circular icon button"
        id={TempColor(props.data[props.data.length - 1])}
        onClick={() => {
          // id = "marker-button-select";
          props.selectStation(props.station);
        }}
      >
        {Math.round(props.data[props.data.length - 1]) + props.unit}
      </button>
      {/* <button
          className="small ui circular icon button"
          id={idVal}
        >
          {Math.round(data[data.length - 3]) + unit}
        </button>
        <button
          className="small ui circular icon button"
          id={idVal}
        >
          {Math.round(data[data.length - 6]) + unit}
        </button> */}
    </div>
  );
};

export default TempButton;
