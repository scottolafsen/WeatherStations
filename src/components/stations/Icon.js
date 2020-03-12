import React from "react";
import { Button } from "semantic-ui-react";

const MapIcon = props => (
  <Button
    circular
    className="marker-button"
    onClick={e => {
      e.preventDefault();
      props.selectStation(station);
    }}
  >
    {props.station.OBSERVATIONS.air_temp_value_1 &&
    props.selectedLabel.selectedLabel === 1
      ? Math.round(props.station.OBSERVATIONS.air_temp_value_1.value) + " f"
      : props.station.OBSERVATIONS.wind_speed_value_1 &&
        props.selectedLabel.selectedLabel === 2
      ? Math.round(station.OBSERVATIONS.wind_speed_value_1.value) + " mph"
      : station.OBSERVATIONS.wind_cardinal_direction_value_1d &&
        props.selectedLabel.selectedLabel === 3
      ? station.OBSERVATIONS.wind_cardinal_direction_value_1d.value
      : station.OBSERVATIONS.wind_gust_value_1 &&
        props.selectedLabel.selectedLabel === 4
      ? Math.round(station.OBSERVATIONS.wind_gust_value_1.value) + " mph"
      : props.station.OBSERVATIONS.snow_depth_value_1 &&
        props.selectedLabel.selectedLabel === 5
      ? Math.round(props.station.OBSERVATIONS.snow_depth_value_1.value) + " in"
      : null}
  </Button>
);

export default MapIcon;
