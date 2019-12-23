import _ from "lodash";
import { SELECT_STATION } from "../actions/types";

const INTIAL_STATE = {
  selectedStation: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_STATION:
      console.log(action.payload);
      return {
        ...state,
        selectedStation: action.payload
      };
    default:
      return state;
  }
};
