export const GET_STATIONS = 'GET_STATIONS';

export const getStations = stations => ({
  type: GET_STATIONS,
  payload: stations,
});
