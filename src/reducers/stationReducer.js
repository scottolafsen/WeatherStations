import _ from "lodash";
import { FETCH_STATIONS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STATIONS:
      console.log(action.payload);
      return {
        ...state,
        ..._.mapKeys(action.payload, "STID")
      };
    default:
      return state;
  }
};
