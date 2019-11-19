import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import UserReducer from "./UserReducer";
import ShipmentsReducer from "./ShipmentsReducer";
import BikersReducer from "./BikersReducer";

export default (history) => combineReducers({
    router: connectRouter(history),
    user: UserReducer,
    shipments: ShipmentsReducer,
    bikers: BikersReducer
});