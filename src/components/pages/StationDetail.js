import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StationDetail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    // this.props.fetchStation(this.props.match.params.id);
  }

  render() {
    if (!this.props.station) {
      return <div>..Loading...</div>;
    }

    // const { title, description } = this.props.stream;

    return (
      <div>
        <h1>{this.props.station.NAME}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { station: state.stations[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(StationDetail);
