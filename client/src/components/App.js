import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router'
import configureStore from '../utils/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import {Route} from "react-router";
import {PrivateRoute} from "./PrivateRoute";
import LoginContainer from "../containers/LoginContainer";
import DashboardContainer from "../containers/DashboardContainer";
import HeaderContainer from "../containers/HeaderContainer";

function App() {
    const {store, history} = configureStore();
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="App">
                    <Route
                        render={props =>
                            props.location.pathname !== '/login' && (
                                <HeaderContainer
                                    pathName={props.location.pathname}
                                />
                            )
                        }
                    />
                    <PrivateRoute component={DashboardContainer} path="/" exact={true}/>
                    <Route component={LoginContainer} path="/login" exact={true}/>
                </div>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
