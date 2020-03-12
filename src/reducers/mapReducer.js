// import _ from "lodash";
import { CHANGE_VIEWPORT } from "../actions/types";

const INTIAL_STATE = {
  latitude: 40.598301,
  longitude: -111.642995,
  width: "70vw",
  height: "90vh",
  zoom: 11
};

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
        zoom: action.payload.zoom
      };
    default:
      return state;
  }
};
