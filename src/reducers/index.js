import { combineReducers } from "redux";
import authReducer from "./authReducer";
import stationReducer from "./stationReducer";
import mapReducer from "./mapReducer";
import labelReducer from "./labelReducer";
import popupReducer from "./popupReducer";

export default combineReducers({
  auth: authReducer,
  stations: stationReducer,
  map: mapReducer,
  selectedStation: popupReducer,
  selectedLabel: labelReducer
});
