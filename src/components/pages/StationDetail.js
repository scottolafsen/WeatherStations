import React from "react";
import { connect } from "react-redux";
import { fetchStation } from "../../actions";

class StationDetail extends React.Component {
  componentDidMount() {
    this.props.fetchStation(this.props.match.params.id);
  }

  render() {
    if (!this.props.station) {
      return <div>..Loading...</div>;
    }

    const {
      NAME,
      ELEVATION,
      STATE,
      LATITUDE,
      LONGITUDE,
      STATUS,
      PERIOD_OF_RECORD
    } = this.props.station;
    const {
      air_temp_value_1,
      dew_point_temperature_value_1d,
      relative_humidity_value_1
    } = this.props.station.OBSERVATIONS;

    return (
      <div>
        <h1>{NAME ? NAME : ""}</h1>
        <h1>{ELEVATION ? ELEVATION + " feet" : null}</h1>
        <h1>
          {air_temp_value_1
            ? Math.round((air_temp_value_1.value * 9) / 5 + 32) + "F"
            : null}
        </h1>
        <h1>
          {dew_point_temperature_value_1d
            ? Math.round((dew_point_temperature_value_1d.value * 9) / 5 + 32) +
              "F"
            : ""}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    station: state.stations[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStation }
)(StationDetail);
