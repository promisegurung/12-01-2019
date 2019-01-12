import { SET_ACTIVESTATE } from './actionTypes';

export const setActiveState = newActiveState => {
    return {
        type: SET_ACTIVESTATE,
        newActiveState: newActiveState
    }
}