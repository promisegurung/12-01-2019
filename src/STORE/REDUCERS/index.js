import * as actionTypes from '../ACTIONS/actionTypes';

const initialState = {
    activeState: 'events'
}

const setActiveState = (state = initialState, action ) => {
    return {
        activeState: action.newActiveState
    }
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVESTATE:
      return setActiveState(state, action);
    default:
      return state;
  }
};

export default reducer;
