import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.598301,
    longitude: -111.642995,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/scottolafsen/ck2gn2wyq00q01coi2v8gamaz"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {props.stations.map(station => (
          <Marker
            key={station.NAME}
            latitude={station.LATITUDE}
            latitude={station.LATITUDE}
          ></Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
