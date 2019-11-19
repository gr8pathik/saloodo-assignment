import {GET_BIKERS_FAILED, GET_BIKERS_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    bikers: [],
    isError: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BIKERS_FAILED:
            return {
                ...state,
                bikers: action.payload
            };
        case GET_BIKERS_SUCCESS:
            return {
                ...state,
                isError: true
            };
        default:
            return state;
    }
};
