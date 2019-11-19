import {GET_BIKERS_FAILED, GET_BIKERS_SUCCESS} from "./types";
import WebApi from "../utils/WebApi";

export const getAllBikers = () => {
    return dispatch => {
        return WebApi.getAllBikers()
            .then(bikers => {
                dispatch({type: GET_BIKERS_FAILED, payload: bikers.data});
            })
            .catch(() => {
                const errorMsg = "Shipments failed to load.";
                dispatch({type: GET_BIKERS_SUCCESS, payload: errorMsg});
            });
    }
};