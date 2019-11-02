import React from "react";
import { connect } from "react-redux";
import { fetchStations } from "../../actions";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import { Link } from "react-router-dom";

class StationMap extends React.Component {
  state = {
    viewport: {
      latitude: 40.598301,
      longitude: -111.642995,
      width: "100vw",
      height: "100vh",
      zoom: 10
    },
    selectedStation: null
  };

  componentDidMount() {
    this.props.fetchStations();
  }

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/scottolafsen/ck2gn2wyq00q01coi2v8gamaz"
          onViewportChange={viewport => this.setState({ viewport })}
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
                  this.setState({ selectedStation: station });
                }}
              >
                {station.STID}
              </button>
            </Marker>
          ))}
          {this.state.selectedStation ? (
            <Popup
              latitude={parseFloat(this.state.selectedStation.LATITUDE)}
              longitude={parseFloat(this.state.selectedStation.LONGITUDE)}
              onClose={() => {
                this.setState({ selectedStation: null });
              }}
            >
              <div>
                <h4>
                  {this.state.selectedStation.NAME
                    ? this.state.selectedStation.NAME
                    : ""}
                </h4>
                <h4>
                  {this.state.selectedStation.ELEVATION
                    ? this.state.selectedStation.ELEVATION
                    : ""}
                </h4>
                <h4>
                  {this.state.selectedStation.OBSERVATIONS.air_temp_value_1
                    ? this.state.selectedStation.OBSERVATIONS.air_temp_value_1
                        .value
                    : ""}
                </h4>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stations: Object.values(state.stations),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStations }
)(StationMap);
