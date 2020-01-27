import React from "react";
import { connect } from "react-redux";
import {
  fetchStations,
  changeViewport,
  selectStation,
  selectLabel
} from "../../actions";
const StationButton = props => (
  <button className="marker-button">
    {props.airTemp ? Math.round(props.airTempValue) + "F" : null}
  </button>
);

const mapStateToProps = state => {
  return {
    stations: Object.values(state.stations),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    viewport: state.map,
    selectedStation: state.selectedStation.selectedStation,
    selectedLabel: state.selectedLabel
  };
};

export default connect(mapStateToProps, {
  fetchStations,
  changeViewport,
  selectStation,
  selectLabel
})(StationMap);
export default StationButton;
