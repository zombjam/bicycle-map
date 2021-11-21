import * as MapActions from '../actions/map';

const initialState = {
  position: [25.046891, 121.516602],
  map: null,
  modal: {
    isOpen: false,
    content: null,
    // isOpen: true,
    // content: 'Open modal',
  },
};

const mapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MapActions.SEARCH_LOCATION:
      return { ...state, position: payload };
    case MapActions.SET_MAP_COMPONENT:
      return { ...state, map: payload };
    case MapActions.TOGGLE_MODAL:
      return { ...state, modal: payload };
    default:
      return state;
  }
};

export default mapReducer;
