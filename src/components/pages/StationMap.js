import React from "react";
import { connect } from "react-redux";
import { fetchStations, changeViewport, selectStation } from "../../actions";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import wxStations from "./stid.json";
import StationPopup from "../stations/StationPopup";
import { Container, Grid, Column, Header } from "semantic-ui-react";
// import { Link } from "react-router-dom";

class StationMap extends React.Component {
  componentDidMount() {
    const time = "latest";
    const stid = wxStations.central;
    this.props.fetchStations(time, stid);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Container fluid>
          <Grid>
            <Grid.Row>
              {/* <Grid.Column width={5}> */}
              {this.props.selectedStation ? (
                <StationPopup
                  observations={this.props.selectedStation.OBSERVATIONS}
                  latitude={this.props.selectedStation.LATITUDE}
                  longitude={this.props.selectedStation.LONGITUDE}
                  selectStation={() => this.props.selectStation(null)}
                />
              ) : null}
              {/* </Grid.Column>
              <Grid.Column width={11}> */}
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
                      {station.OBSERVATIONS.air_temp_value_1
                        ? Math.round(
                            station.OBSERVATIONS.air_temp_value_1.value
                          ) + "F"
                        : null}
                    </button>
                  </Marker>
                ))}
              </ReactMapGL>
              {/* </Grid.Column> */}
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
    selectedStation: state.selectedStation.selectedStation
  };
};

export default connect(mapStateToProps, {
  fetchStations,
  changeViewport,
  selectStation
})(StationMap);
