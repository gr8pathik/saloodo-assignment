import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router'
import configureStore from '../utils/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import LoginComponent from "./LoginComponent";
import {Route} from "react-router";

function App() {
    const {store, history} = configureStore();
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="App">
                    <Route component={LoginComponent} path="/" exact={true} />
                </div>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
