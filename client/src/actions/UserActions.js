import {push} from "connected-react-router";
import {LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, LOGOUT_USER} from "./types";
import WebApi from "../utils/WebApi";

export const loginUser = (username, password) => {
//following is to show loading activity like spinner
    return dispatch => {
        dispatch({type: LOGIN_USER});
        return WebApi.login(username, password)
            .then(user => {
                dispatch({type: LOGIN_USER_SUCCESS, payload: user});
                localStorage.setItem('user', JSON.stringify(user));
            })
            .then(user =>
                //following is to redirect after login success
                dispatch(push('/'))
            )
            .catch(error => {
                const errorMsg = "Username or password incorrect";
                dispatch({type: LOGIN_USER_FAILED, payload: errorMsg});
            });
    }
};

export const logoutUser = () => dispatch => {
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem('user');
    dispatch(push('/login'));
};