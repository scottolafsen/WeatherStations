import React from "react";
import { connect } from "react-redux";
import { selectStation, selectLabel } from "../../actions";
import ReactMapGL, { Marker } from "react-map-gl";
import SnowButton from "./ButtonSnow";
import TempButton from "./ButtonTemp";
import WindButton from "./ButtonWind";
import SWEButton from "./ButtonSWE";

import "./temp-color.css";
import "./change-color.css";

class MapButton extends React.Component {
  renderStations() {
    let dropdown = this.props.selectedLabel.split("|");
    let mapOb = dropdown[0];
    let unit = dropdown[1];
    let stations = this.props.stations;
    let stationsFilter = stations.filter(function (station) {
      let obNames = Object.keys(station.OBSERVATIONS);
      return obNames.includes(mapOb);
    });
    return stationsFilter.map((station) => {
      let obNames = Object.keys(station.OBSERVATIONS);
      let values = Object.values(station.OBSERVATIONS);
      let index = obNames.indexOf(mapOb);
      let data = values[index];
      return (
        <Marker
          key={station.NAME}
          latitude={parseFloat(station.LATITUDE)}
          longitude={parseFloat(station.LONGITUDE)}
        >
          {mapOb === "air_temp_set_1" ? (
            <TempButton
              unit={unit}
              data={data}
              station={station}
              selectStation={(station) => this.props.selectStation(station)}
            />
          ) : mapOb === "wind_speed_set_1" ? (
            <WindButton
              unit={unit}
              data={data}
              station={station}
              selectStation={(station) => this.props.selectStation(station)}
            />
          ) : mapOb === "snow_depth_set_1" ? (
            <SnowButton
              unit={unit}
              data={data}
              station={station}
              selectStation={(station) => this.props.selectStation(station)}
            />
          ) : mapOb === "snow_water_equiv_set_1" ? (
            <SWEButton
              unit={unit}
              data={data}
              station={station}
              selectStation={(station) => this.props.selectStation(station)}
            />
          ) : null}
        </Marker>
      );
    });
  }

  render() {
    return <div>{this.renderStations()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    stations: Object.values(state.stations),
    selectedStation: state.selectedStation.selectedStation,
    selectedLabel: state.selectedLabel.selectedLabel,
  };
};

export default connect(mapStateToProps, {
  selectStation,
  selectLabel,
})(MapButton);
