import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {logoutUser} from "../actions/UserActions";

export const HeaderContainer = (props) => {
    return (
        <HeaderComponent
            user={props.user}
            logoutUser={props.logoutUser}
        />
    );
};

const mapStateToPropsAOC = state => ({user: state.user});
export default withRouter(connect(mapStateToPropsAOC, {logoutUser: logoutUser})(HeaderContainer));
