export const SEARCH_STATIONS = 'SEARCH_STATIONS';

export const searchStations = stations => ({
  type: SEARCH_STATIONS,
  payload: stations,
});
