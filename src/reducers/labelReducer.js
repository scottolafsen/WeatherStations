// import _ from "lodash";
import { SELECT_LABEL } from "../actions/types";

const INTIAL_STATE = {
  selectedLabel: "air_temp_set_1|f"
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_LABEL:
      // console.log(action.payload);
      return {
        ...state,
        selectedLabel: action.payload
      };
    default:
      return state;
  }
};
