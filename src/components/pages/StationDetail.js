import React from "react";
import { connect } from "react-redux";
import { fetchStation } from "../../actions";
// import Station from "../stations/StationObservation";
import { Container, Grid, Table, Header } from "semantic-ui-react";

class StationDetail extends React.Component {
  componentDidMount() {
    console.log(this.props.match);
    this.props.fetchStation(this.props.match.params.id);
  }
  renderColumns() {
    const colNames = Object.keys(this.props.station.OBSERVATIONS);
    return colNames.map(col => {
      return (
        <Table.HeaderCell key={col}>
          {col
            .split("_")
            .slice(0, -2)
            .join(" ")}
        </Table.HeaderCell>
      );
    });
  }
  renderObservation() {
    const obNames = Object.keys(this.props.station.OBSERVATIONS);
    const obs = Object.values(this.props.station.OBSERVATIONS);
    const dateTime = obs[0];
    return dateTime.map((d, index) => {
      let i = index;
      return (
        <Table.Row key={i}>
          {obNames.map((ob, index) => {
            let val = obs[index];
            let cell = val[i];
            return <Table.Cell key={index}>{cell}</Table.Cell>;
          })}
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
      STATE
      // LATITUDE,
      // LONGITUDE,
      // STATUS,
      // PERIOD_OF_RECORD
    } = this.props.station;

    return (
      <div>
        <Container>
          <Grid.Row>
            <Header size="large">
              {NAME ? NAME : ""}
              {STATE ? STATE : ""}
              {ELEVATION + " Feet" ? ELEVATION : ""}
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Table celled singleLine>
              <Table.Header>
                <Table.Row>{this.renderColumns()}</Table.Row>
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
    // station: state.stations.station
    station: state.stations[ownProps.match.params.id]
    // obs: state.stations[ownProps.match.params.id].OBSERVATIONS
  };
};

export default connect(mapStateToProps, { fetchStation })(StationDetail);
