import React from "react";
import TempColor from "./ObColor";

const WindButton = props => {
  return (
    <div class="ui icon buttons">
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
      <button className="small ui circular icon button" id={"idVal"}>
        {Math.round(props.data[props.data.length - 3]) + props.unit}
      </button>
      <button className="small ui circular icon button" id={"idVal"}>
        {Math.round(props.data[props.data.length - 6]) + props.unit}
      </button>
    </div>
  );
};

export default WindButton;

// switch (unit) {
//   case "f":
//     idVal = TempColor(data[data.length - 1]);
//     break;
//   case "mph":
//     idVal = "subzero";
//     break;
//   case '"':
//     idVal = "subzero";
//     className = "";
//     break;
//   default:
//     idVal = "marker-button";
// }
