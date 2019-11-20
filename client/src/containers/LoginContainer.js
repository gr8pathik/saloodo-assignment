import React from 'react';
import LoginComponent from "../components/LoginComponent";
import {connect} from "react-redux";
import {loginUser} from "../actions/UserActions";

const LoginContainer = (props) => {
    return <LoginComponent
        loginUser={props.loginUser}
        user={props.user}
    />
};


const mapStateToProps = state => ({user: state.user});

export const mapDispatchToProps = {loginUser};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);