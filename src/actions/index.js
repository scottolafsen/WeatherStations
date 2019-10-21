import history from "../history";
import { SIGN_IN, SIGN_OUT, FETCH_STATIONS } from "./types";
import station from "../apis/station";

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
  const response = await station.get();

  dispatch({ type: FETCH_STATIONS, payload: response.data.STATION });
};

// export const fetchStream = (id) => async dispatch => {
//   const response = await streams.get(`/streams/${id}`)

//   dispatch({ type: FETCH_STREAM, payload: response.data })
// }
