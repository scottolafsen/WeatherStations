// import React from "react";
// import { connect } from "react-redux";
// import webcams from "./web-cams.json";

// const WebcamDetail = () => {
//   const webcam = webcams.filter(function(webcam) {
//     return webcam.id === this.props.id;
//   });

//   console.log(webcams);
//   return (
//     <div>
//       <img className="ui fluid image" alt={webcam.name} src={webcam.url}></img>
//     </div>
//   );
// };

// const mapStateToProps = (state, ownProps) => {
//   return {
//     id: ownProps.match.params.id
//   };
// };

// export default connect(mapStateToProps)(WebcamDetail);
