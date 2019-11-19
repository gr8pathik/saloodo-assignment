import React from 'react';
import {connect} from "react-redux";
import DashboardComponent from "../components/DashboardComponent";
import {getAllShipments} from "../actions/ShipmentsActions";
import {getAllBikers} from "../actions/BikersActions";

class DashboardContainer extends React.Component {
    componentDidMount() {
        this.props.getAllShipments();
        this.props.getAllBikers();
    };

    onBikerAssign = (biker) => {
        console.log(biker)
    };

    render() {
        return <DashboardComponent
            shipments={this.props.shipments}
            user={this.props.user}
            bikers={this.props.bikers}
            onBikerAssign={this.onBikerAssign}
        />
    }
};


const mapStateToProps = state => ({shipments: state.shipments, user: state.user, bikers: state.bikers});

export default connect(mapStateToProps, {getAllShipments, getAllBikers})(DashboardContainer);