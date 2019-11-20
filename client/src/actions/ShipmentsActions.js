import {GET_SHIPMENTS_FAILED, GET_SHIPMENTS_SUCCESS} from "./types";
import WebApi from "../utils/WebApi";

export const getAllShipments = () => {
    return dispatch => {
        return WebApi.getAllShipments()
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
            .then(shipment => {
                console.log("called");
                dispatch(getAllShipments());
            })
            .catch(() => {
                const errorMsg = "Update shipment failed.";
            });
    }
};