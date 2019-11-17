import React from "react";
import { connect } from "react-redux";
import { fetchStation } from "../../actions";
import Station from "../stations/StationObservation";
import { Container, Grid, Table } from "semantic-ui-react";

class StationDetail extends React.Component {
  componentDidMount() {
    this.props.fetchStation(this.props.match.params.id);
  }
  renderObservation() {
    const obNames = Object.keys(this.props.station.OBSERVATIONS);
    const obs = Object.values(this.props.station.OBSERVATIONS);

    console.log(obs);
    return obs.map((ob, index) => {
      return (
        <Table.Row>
          <Table.Cell>{obNames[index]}</Table.Cell>
          <Table.Cell>{ob.value}</Table.Cell>
          <Table.Cell>{ob.date_time}</Table.Cell>
        </Table.Row>
      );
    });
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
    console.log(this.props.station.OBSERVATIONS);
    return (
      <div>
        <Container>
          <Grid.Row>
            <h1>{NAME ? NAME : ""}</h1>
            <h1>{ELEVATION ? ELEVATION + " feet" : null}</h1>
          </Grid.Row>
          <Grid.Row>
            <Table celled fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Observation</Table.HeaderCell>
                  <Table.HeaderCell>Value</Table.HeaderCell>
                  <Table.HeaderCell>date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{this.renderObservation()}</Table.Body>
            </Table>
          </Grid.Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    station: state.stations[ownProps.match.params.id]
    // obs: state.stations[ownProps.match.params.id].OBSERVATIONS
  };
};

export default connect(mapStateToProps, { fetchStation })(StationDetail);
