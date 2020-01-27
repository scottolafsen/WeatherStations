import React from "react";
import { connect } from "react-redux";
import {
  fetchStations,
  changeViewport,
  selectStation,
  selectLabel
} from "../../actions";
import ReactMapGL, { Marker } from "react-map-gl";
import wxStations from "./stid.json";
import StationPopup from "../stations/StationPopup";
import { Container, Grid, Dropdown, Menu } from "semantic-ui-react";
// import { Link } from "react-router-dom";

class StationMap extends React.Component {
  componentDidMount() {
    const time = "latest";
    const stid = wxStations.central;
    this.props.fetchStations(time, stid);
    // setTimeout = (this.props.selectLabel(this.props.selectedLabel + 1), 3000);
  }

  render() {
    const options = [
      { key: 1, text: "Temp", value: 1 },
      { key: 2, text: "Wind Speed", value: 2 },
      { key: 3, text: "Wind Direction", value: 3 },
      { key: 4, text: "Wind Gust", value: 4 },
      { key: 5, text: "Snow Depth", value: 5 }
    ];

    console.log(this.props);

    return (
      <div>
        <Container fluid>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Menu compact>
                  <Dropdown
                    text="Observation"
                    options={options}
                    simple
                    item
                    onChange={(event, data) =>
                      this.props.selectLabel(data.value)
                    }
                  />
                </Menu>
                {this.props.selectedStation ? (
                  <StationPopup
                    elevation={this.props.selectedStation.ELEVATION}
                    stationName={this.props.selectedStation.NAME}
                    observations={this.props.selectedStation.OBSERVATIONS}
                    latitude={this.props.selectedStation.LATITUDE}
                    longitude={this.props.selectedStation.LONGITUDE}
                    selectStation={() => this.props.selectStation(null)}
                  />
                ) : null}
              </Grid.Column>
              <Grid.Column width={12}>
                <ReactMapGL
                  {...this.props.viewport}
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                  mapStyle="mapbox://styles/scottolafsen/ck2gn2wyq00q01coi2v8gamaz"
                  onViewportChange={viewport =>
                    this.props.changeViewport(viewport)
                  }
                >
                  {this.props.stations.map(station => (
                    <Marker
                      key={station.NAME}
                      latitude={parseFloat(station.LATITUDE)}
                      longitude={parseFloat(station.LONGITUDE)}
                    >
                      <button
                        className="marker-button"
                        onClick={e => {
                          e.preventDefault();
                          this.props.selectStation(station);
                        }}
                      >
                        {station.OBSERVATIONS.air_temp_value_1 &&
                        this.props.selectedLabel.selectedLabel === 1
                          ? Math.round(
                              station.OBSERVATIONS.air_temp_value_1.value
                            ) + " f"
                          : station.OBSERVATIONS.wind_speed_value_1 &&
                            this.props.selectedLabel.selectedLabel === 2
                          ? Math.round(
                              station.OBSERVATIONS.wind_speed_value_1.value
                            ) + " mph"
                          : station.OBSERVATIONS
                              .wind_cardinal_direction_value_1d &&
                            this.props.selectedLabel.selectedLabel === 3
                          ? station.OBSERVATIONS
                              .wind_cardinal_direction_value_1d.value
                          : station.OBSERVATIONS.wind_gust_value_1 &&
                            this.props.selectedLabel.selectedLabel === 4
                          ? Math.round(
                              station.OBSERVATIONS.wind_gust_value_1.value
                            ) + " mph"
                          : station.OBSERVATIONS.snow_depth_value_1 &&
                            this.props.selectedLabel.selectedLabel === 5
                          ? Math.round(
                              station.OBSERVATIONS.snow_depth_value_1.value
                            ) + " in"
                          : null}
                      </button>
                    </Marker>
                  ))}
                </ReactMapGL>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

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
