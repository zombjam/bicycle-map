export const SEARCH_LOCATION = 'SEARCH_LOCATION';
export const SET_MAP_COMPONENT = 'SET_MAP_COMPONENT';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const setLocation = position => ({
  type: SEARCH_LOCATION,
  payload: position,
});

export const setMap = mapComponent => ({
  type: SET_MAP_COMPONENT,
  payload: mapComponent,
});

export const toggleModal = ({ isOpen, content }) => ({
  type: TOGGLE_MODAL,
  payload: { isOpen, content },
});
