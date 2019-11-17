import React from "react";
import { connect } from "react-redux";
import webcams from "./web-cams.json";

class WebcamDetail extends React.Component {
  render() {
    if (!this.props.id) {
      return <div>..Loading...</div>;
    }
    return (
      <div>
        <img
          className="ui fluid bordered rounded image"
          alt={this.props.webcam.name}
          src={this.props.webcam.url}
        ></img>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    webcam: webcams[ownProps.match.params.id - 1]
  };
};

export default connect(mapStateToProps)(WebcamDetail);
