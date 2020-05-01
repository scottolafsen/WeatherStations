// import _ from "lodash";
import { CHANGE_VIEWPORT } from "../actions/types";

const INTIAL_STATE = {
  latitude: 40.5922384102421,
  longitude: -111.62833529913556,
  width: "100vw",
  height: "85vh",
  zoom: 11.413080689976473,
  pitch: 36.78571428571429,
  bearing: 1.2890625000000284,
  altitude: 1.5,
  maxZoom: 24,
  minZoom: 0,
  maxPitch: 60,
  minPitch: 0,
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
        minPitch: action.payload.minPitch,
      };
    default:
      return state;
  }
};
