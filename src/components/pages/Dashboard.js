import React from "react";
import { connect } from "react-redux";
import { fetchStations } from "../../actions";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchStations();
  }

  renderList() {
    return this.props.stations.map(station => {
      return (
        <div className="item" key={station.STID}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/stations/${station.STID}`} className="header">
              {station.NAME}
            </Link>
            <div className="description">{station.ELEVATION}</div>
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
