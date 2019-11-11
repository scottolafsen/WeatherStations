import React from "react";
import { connect } from "react-redux";
import { fetchStations } from "../../actions";
import { Link } from "react-router-dom";
import wxStations from "./stid.json";

class Dashboard extends React.Component {
  componentDidMount() {
    const time = "latest";
    const stid = wxStations.central;
    console.log(wxStations);
    this.props.fetchStations(time, stid);
  }

  renderList() {
    return this.props.stations.map(station => {
      const {
        air_temp_value_1,
        wind_cardinal_direction_value_1d,
        wind_speed_value_1,
        dew_point_temperature_value_1d,
        wind_gust_value_1,
        relative_humidity_value_1
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
              {air_temp_value_1
                ? Math.round((air_temp_value_1.value * 9) / 5 + 32) + "F"
                : null}{" "}
            </div>
            <div className="description">
              {wind_cardinal_direction_value_1d
                ? wind_cardinal_direction_value_1d.value
                : null}{" "}
              {wind_speed_value_1
                ? Math.round(wind_speed_value_1.value * 2.237) + "mph"
                : null}{" "}
              {wind_gust_value_1
                ? "gusting " +
                  Math.round(wind_gust_value_1.value * 2.237) +
                  "mph"
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

export default connect(
  mapStateToProps,
  { fetchStations }
)(Dashboard);
