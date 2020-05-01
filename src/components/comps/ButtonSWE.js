import React from "react";
import { SWEPercentColor } from "./ObColor";
import Medians from "./swemedians.json";

const SWEButton = (props) => {
  const current = props.data[props.data.length - 1];
  const stnId = props.station.STID;

  const monthDay = "430";
  let medianVal = "";
  Medians.forEach((med) => {
    if (med.shef_id === stnId) {
      medianVal = med[monthDay];
    }
  });

  const percentNormal = (current / medianVal) * 100;
  console.log(current, medianVal, percentNormal);
  return (
    <div className="small ui icon buttons">
      <button
        className="medium ui icon button"
        id={"swe"}
        onClick={() => {
          // id = "marker-button-select";
          props.selectStation(props.station);
        }}
      >
        {current + '"'}
      </button>
      <button
        className="medium ui icon button"
        id={SWEPercentColor(percentNormal)}
        onClick={() => {
          // id = "marker-button-select";
          props.selectStation(props.station);
        }}
      >
        {Math.round(percentNormal) + props.unit}
      </button>
    </div>
  );
};

export default SWEButton;
