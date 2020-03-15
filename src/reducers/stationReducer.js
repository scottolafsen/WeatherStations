import _ from "lodash";
import { FETCH_STATIONS, FETCH_STATION } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STATIONS:
      // console.log(action.payload);
      return {
        ...state,
        ..._.mapKeys(action.payload, "STID")
      };
    case FETCH_STATION:
      // console.log(action.payload);
      return { ...state, [action.payload.STID]: action.payload };
    default:
      return state;
  }
};
