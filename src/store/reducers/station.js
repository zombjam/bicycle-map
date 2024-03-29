import * as StationActions from '../actions/station';

const initialState = {
  station: [],
};

const stationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case StationActions.GET_STATIONS:
      return { ...state, station: payload };
    default:
      return state;
  }
};

export default stationReducer;
