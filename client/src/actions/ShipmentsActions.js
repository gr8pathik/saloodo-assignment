import {GET_SHIPMENTS_FAILED, GET_SHIPMENTS_SUCCESS} from "./types";
import WebApi from "../utils/WebApi";

export const getAllShipments = (userId) => {
    return (dispatch, getState) => {
        const state = getState();
        const userId = state.user.role === "biker" ? state.user._id : undefined;
        return WebApi.getAllShipments(userId)
            .then(shipments => {
                dispatch({type: GET_SHIPMENTS_SUCCESS, payload: shipments.data});
            })
            .catch(() => {
                const errorMsg = "Shipments failed to load.";
                dispatch({type: GET_SHIPMENTS_FAILED, payload: errorMsg});
            });
    }
};

export const updateShipment = (shipmentId, shipmentData) => {
    return dispatch => {
        return WebApi.updateShipment(shipmentId, shipmentData)
            .then(shipments => {
                dispatch(getAllShipments());
            })
            .catch(() => {
                const errorMsg = "Update shipment failed.";
            });
    }
};