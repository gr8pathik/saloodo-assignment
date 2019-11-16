import {applyMiddleware, compose, createStore} from 'redux';
import thunk from "redux-thunk";
import {createBrowserHistory as createHistory} from 'history'
import createRootReducer from "../reducers";
import { routerMiddleware } from 'connected-react-router'


const configureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    let middleware = [thunk];
    const history = createHistory();
    middleware.push(routerMiddleware(history));
    const store = createStore(createRootReducer(history),composeEnhancers(applyMiddleware(...middleware)));

    return {store,history};
};

export default configureStore;