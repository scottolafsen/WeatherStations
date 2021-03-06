import React from "react";
import MapButton from "../comps/MapButton";
import { connect } from "react-redux";
import {
  fetchStations,
  changeViewport,
  selectStation,
  selectLabel,
} from "../../actions";
import ReactMapGL from "react-map-gl";
import wxStations from "./stid.json";
import StationPopup from "../comps/StationPopup";
// import MapIcon from "../stations/Icon";
import { Container, Grid, Dropdown, Menu, Table } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import "./StationMap.css";

class StationMap extends React.Component {
  componentDidMount() {
    const time = "timeseries";
    const stid = wxStations.central;
    const recent = "720";
    this.props.fetchStations(time, stid, recent);
    // setTimeout = (this.props.selectLabel(this.props.selectedLabel + 1), 3000);
  }

  render() {
    const options = [
      { key: 1, text: "Temp", value: "air_temp_set_1|f" },
      { key: 2, text: "Wind Speed", value: "wind_speed_set_1|mph" },
      { key: 3, text: "Wind Direction", value: "wind_direction_set_1| " },
      { key: 4, text: "Wind Gust", value: "wind_gust_set_1|mph" },
      { key: 5, text: "Snow Depth", value: 'snow_depth_set_1|"' },
      { key: 6, text: "Snow Water Equiv", value: "snow_water_equiv_set_1|%" },
    ];

    console.log(this.props);

    return (
      <div id="map">
        <Menu compact>
          <Dropdown
            text="Observation"
            options={options}
            simple
            item
            onChange={(event, data) => this.props.selectLabel(data.value)}
          />
        </Menu>
        <ReactMapGL
          {...this.props.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          // mapStyle="mapbox://styles/scottolafsen/ck2gn2wyq00q01coi2v8gamaz"
          mapStyle="mapbox://styles/scottolafsen/cjusqhjkyfx1n1fo2uw8ctt79"
          onViewportChange={(viewport) => this.props.changeViewport(viewport)}
        >
          <MapButton
          // stations={this.props.stations}
          // selectedLabel={this.props.selectedLabel}
          // selectStation={station =>
          //   this.props.selectStation(station)
          // }
          />
          {this.props.selectedStation ? (
            <StationPopup
              selectedLabel={this.props.selectedLabel}
              elevation={this.props.selectedStation.ELEVATION}
              stationName={this.props.selectedStation.NAME}
              STID={this.props.selectedStation.STID}
              observations={this.props.selectedStation.OBSERVATIONS}
              latitude={this.props.selectedStation.LATITUDE}
              longitude={this.props.selectedStation.LONGITUDE}
              selectStation={() => this.props.selectStation(null)}
            />
          ) : null}
        </ReactMapGL>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stations: Object.values(state.stations),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    viewport: state.map,
    selectedStation: state.selectedStation.selectedStation,
    selectedLabel: state.selectedLabel.selectedLabel,
  };
};

export default connect(mapStateToProps, {
  fetchStations,
  changeViewport,
  selectStation,
  selectLabel,
})(StationMap);
