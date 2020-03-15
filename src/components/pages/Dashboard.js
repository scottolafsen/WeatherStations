import React from "react";
import { connect } from "react-redux";
import { fetchStations } from "../../actions";
import { Link } from "react-router-dom";
import wxStations from "./stid.json";

class Dashboard extends React.Component {
  componentDidMount() {
    const time = "timeseries";
    const stid = wxStations.central;
    const recent = "720";
    this.props.fetchStations(time, stid, recent);
  }

  renderList() {
    return this.props.stations.map(station => {
      const {
        air_temp_set_1,
        wind_cardinal_direction_set_1d,
        wind_speed_set_1,
        wind_gust_set_1
      } = station.OBSERVATIONS;

      return (
        <div className="item" key={station.STID}>
          <i className="large middle aligned icon thermometer half" />
          <div className="content">
            <Link to={`/stations/${station.STID}`} className="header">
              {station.NAME}
            </Link>
            <div className="description">{station.ELEVATION + " feet"} </div>
            <div className="description">
              <strong>
                {air_temp_set_1 ? Math.round(air_temp_set_1[0]) + "F" : null}{" "}
              </strong>
            </div>
            <div className="description">
              {wind_cardinal_direction_set_1d
                ? wind_cardinal_direction_set_1d[0]
                : null}{" "}
              {wind_speed_set_1
                ? Math.round(wind_speed_set_1[0]) + "mph"
                : null}{" "}
              {wind_gust_set_1
                ? "gusting " + Math.round(wind_gust_set_1[0]) + "mph"
                : null}{" "}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Stations</h2>
        <div className="ui celled list">{this.renderList()}</div>
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

export default connect(mapStateToProps, { fetchStations })(Dashboard);
