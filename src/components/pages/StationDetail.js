import React from "react";
import { connect } from "react-redux";
import { fetchStation } from "../../actions";
// import Station from "../stations/StationObservation";
import { Container, Grid, Table, Header } from "semantic-ui-react";
import moment from "moment";
import Chart from "../comps/Chart";

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
          {col.split("set")[0].replace(/_/g, " ")}
        </Table.HeaderCell>
      );
    });
  }
  renderObservation() {
    const obNames = Object.keys(this.props.station.OBSERVATIONS);
    // console.log(obNames);
    const obs = Object.values(this.props.station.OBSERVATIONS);
    const dateTime = obs[0];
    const iterator = dateTime.length;
    return dateTime.map((d, index) => {
      let i = index;
      return (
        <Table.Row key={i}>
          {obNames.map((ob, index) => {
            let val = obs[index];
            let cell = val[iterator - i - 1];
            if (ob === "date_time") {
              let parsed = moment
                .utc(cell)
                .local()
                .format("dddd hh:mm a");
              // console.log(parsed);
              return <Table.Cell key={index}>{parsed}</Table.Cell>;
            } else {
              return <Table.Cell key={index}>{cell}</Table.Cell>;
            }
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
            <Header size="large" id="stnName">
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
          <Grid.Row>{<Chart stations={this.props.station} />}</Grid.Row>
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
