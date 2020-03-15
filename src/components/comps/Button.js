import React from "react";

const ButtonType = unit => {
  if (unit === '"') {
    return (
      <button
        className="ui circular icon button"
        id={idVal}
        onClick={() => {
          // id = "marker-button-select";
          props.selectStation(station);
        }}
      >
        {Math.round(data[data.length - 1]) + unit}
      </button>
    );
  }
};

export default ButtonType;
