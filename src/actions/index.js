import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STATIONS,
  FETCH_STATION,
  CHANGE_VIEWPORT
} from "./types";
import station from "../apis/station";

export function changeViewport(mapState) {
  return {
    type: CHANGE_VIEWPORT,
    payload: {
      mapState
    }
  };
}

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchStations = () => async dispatch => {
  const response = await station.get(
    "/latest?stid=PKCU1, BRC, SOLSM, BRW, SOL, SOLAP, SOLBS, SOLMB, SOLHP, REY, UTSTR, UTTPD, UTCDF, SPC, MLDU1&token=5f4bddebeaba4e6892eade4aa033e41b"
  );

  dispatch({ type: FETCH_STATIONS, payload: response.data.STATION });
};

export const fetchStation = id => async dispatch => {
  const response = await station.get(
    `/latest?stid=${id}&token=5f4bddebeaba4e6892eade4aa033e41b`
  );

  dispatch({ type: FETCH_STATION, payload: response.data.STATION[0] });
};

// export const fetchStream = id => async dispatch => {
//   const response = await streams.get(`/stations/${id}`);

//   dispatch({ type: FETCH_STATION, payload: response.data });
// };
