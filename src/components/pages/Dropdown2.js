switch (this.props.selectedLabel) {
  case 1:
    station.OBSERVATIONS.air_temp_value_1
      ? Math.round(station.OBSERVATIONS.air_temp_value_1.value) + "F"
      : null;
    break;
  case 2:
    station.OBSERVATIONS.wind_speed_value_1
      ? Math.round(station.OBSERVATIONS.wind_speed_value_1.value) + "F"
      : null;
    break;
  case 3:
    station.OBSERVATIONS.wind_cardinal_direction_value_1d
      ? Math.round(
          station.OBSERVATIONS.wind_cardinal_direction_value_1d.value
        ) + "F"
      : null;
    break;
  case 4:
    station.OBSERVATIONS.snow_depth_value_1
      ? Math.round(station.OBSERVATIONS.snow_depth_value_1.value) + "F"
      : null;
    break;
  default:
  // code block
}
