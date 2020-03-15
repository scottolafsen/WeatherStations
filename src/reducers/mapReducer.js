// import _ from "lodash";
import { CHANGE_VIEWPORT } from "../actions/types";

const INTIAL_STATE = {
  latitude: 40.63286709946089,
  longitude: -111.61777138698183,
  width: "70vw",
  height: "90vh",
  zoom: 12.082755373129745,
  pitch: 43.853338363270915,
  bearing: 141.56250000000003,
  altitude: 1.5,
  maxZoom: 24,
  minZoom: 0,
  maxPitch: 60,
  minPitch: 0
};
// width: 1344
// height: 778

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_VIEWPORT:
      console.log(action.payload);
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        width: action.payload.width,
        height: action.payload.height,
        zoom: action.payload.zoom,
        pitch: action.payload.pitch,
        bearing: action.payload.bearing,
        altitude: action.payload.altitude,
        maxZoom: action.payload.maxZoom,
        minZoom: action.payload.minZoom,
        maxPitch: action.payload.maxPitch,
        minPitch: action.payload.minPitch
      };
    default:
      return state;
  }
};
