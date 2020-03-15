import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import TempColor from "./ObColor";
import "./temp-color.css";

const MapButton = props => {
  let dropdown = props.selectedLabel.split("|");
  let mapOb = dropdown[0];
  let unit = dropdown[1];
  let stations = props.stations;

  let stationsFilter = stations.filter(function(station) {
    let obNames = Object.keys(station.OBSERVATIONS);
    return obNames.includes(mapOb);
  });

  return stationsFilter.map(station => {
    let obNames = Object.keys(station.OBSERVATIONS);
    let values = Object.values(station.OBSERVATIONS);
    let index = obNames.indexOf(mapOb);
    let data = values[index];
    let idVal;
    let className;

    switch (unit) {
      case "f":
        idVal = TempColor(data[data.length - 1]);
        break;
      case "mph":
        idVal = "wind";
        break;
      case '"':
        idVal = "snow";
        className = "";
        break;
      default:
        idVal = "marker-button";
    }
    return (
      <Marker
        key={station.NAME}
        latitude={parseFloat(station.LATITUDE)}
        longitude={parseFloat(station.LONGITUDE)}
      >
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
      </Marker>
    );
  });
};

export default MapButton;
