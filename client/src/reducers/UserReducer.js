import {
    LOGIN_USER,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER
} from '../actions/types';

let user = JSON.parse(localStorage.getItem('user'));
const baseState = {loggedInErrorMessage: "", isLoggedIn: false};
const INITIAL_STATE = user ? { ...baseState, isLoggedIn: true, ...user } : baseState;
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loggedInErrorMessage: ''};
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoggedIn: true
            };
        case LOGIN_USER_FAILED:
            return {
                ...state,
                loggedInErrorMessage: action.payload,
                isLoggedIn: false
            };
        case LOGOUT_USER:
            return INITIAL_STATE;
        default:
            return state;
    }
};
