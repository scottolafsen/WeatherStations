// import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STATIONS,
  FETCH_STATION,
  CHANGE_VIEWPORT,
  SELECT_STATION,
  SELECT_LABEL,
} from './types';

import station from '../apis/station';

export const changeViewport = (viewport) => {
  return {
    type: CHANGE_VIEWPORT,
    payload: viewport,
  };
};

export const selectStation = (station) => {
  return {
    type: SELECT_STATION,
    payload: station,
  };
};

export const selectLabel = (label) => {
  return {
    type: SELECT_LABEL,
    payload: label,
  };
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchStations = (time, stid, recent) => async (dispatch) => {
  const synopticApiKey = process.env.REACT_APP_SYNOPTIC_API;
  const units = 'temp|F,speed|mph,pres|mb,height|ft,precip|in,alti|inhg';
  const status = 'active';
  // const network;
  const sensors = ',pressure';
  const response = await station.get(
    `/${time}?stid=${stid}&status=${status}&vars=${sensors}&recent=${recent}&units=${units}&token=${synopticApiKey}`
  );
  console.log(response);
  dispatch({ type: FETCH_STATIONS, payload: response.data.STATION });
};

export const fetchStation = (id) => async (dispatch) => {
  const synopticApiKey = process.env.REACT_APP_SYNOPTIC_API;
  const units = 'temp|F,speed|mph,pres|mb,height|ft,precip|in,alti|inhg';
  const response = await station.get(
    `/timeseries?stid=${id}&recent=1440&units=${units}&hfmetars=1&token=${synopticApiKey}`
  );
  // console.log(response);
  dispatch({ type: FETCH_STATION, payload: response.data.STATION[0] });
};

// export const fetchStream = id => async dispatch => {
//   const response = await streams.get(`/stations/${id}`);

//   dispatch({ type: FETCH_STATION, payload: response.data });
// };
