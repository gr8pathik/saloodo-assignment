import {GET_SHIPMENTS_FAILED, GET_SHIPMENTS_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    shipments: [],
    isError: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SHIPMENTS_SUCCESS:
            return {
                ...state,
                shipments: action.payload
            };
        case GET_SHIPMENTS_FAILED:
            return {
                ...state,
                isError: true
            };
        default:
            return state;
    }
};
