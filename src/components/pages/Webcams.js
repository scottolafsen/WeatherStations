import React from "react";
import webcams from "./web-cams.json";
import { Link } from "react-router-dom";

const WebcamDetail = () => {
  console.log(webcams);
  return (
    <div>
      {webcams.map(webcam => (
        <Link to={`/webcams/${webcam.id}`}>
          <img
            className="ui large bordered rounded image"
            key={webcam.id}
            alt={webcam.name}
            src={webcam.url}
          ></img>
        </Link>
      ))}
    </div>
  );
};

export default WebcamDetail;
