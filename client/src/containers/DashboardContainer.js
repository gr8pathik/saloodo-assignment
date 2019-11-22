import React from 'react';
import {connect} from "react-redux";
import DashboardComponent from "../components/DashboardComponent";
import {getAllShipments, updateShipment} from "../actions/ShipmentsActions";
import {getAllBikers} from "../actions/BikersActions";

class DashboardContainer extends React.Component {
    componentDidMount() {
        this.props.getAllShipments(this.props.user.role === "biker" && this.props.user._id);
        this.props.getAllBikers();
    };

    onBikerAssign = (biker, shipment) => {
        if(shipment._id) this.props.updateShipment(shipment._id, {...shipment, assignee: biker._id, status: "ASSIGNED"})
    };

    onOrderAction = (shipment, selectedDate, status) => {
        console.log("shipment, selectedDate, status =>", shipment, selectedDate.valueOf(), status);
        if(shipment._id) this.props.updateShipment(shipment._id, {...shipment, assignee: shipment.assignee._id, status, [(status === "PICKED_UP") ? "pickupDateTime":"deliveryDateTime"]:selectedDate.valueOf()})
    };

    render() {
        return <DashboardComponent
            shipments={this.props.shipments}
            user={this.props.user}
            bikers={this.props.bikers}
            onBikerAssign={this.onBikerAssign}
            onOrderAction={this.onOrderAction}
        />
    }
};


const mapStateToProps = state => ({shipments: state.shipments, user: state.user, bikers: state.bikers});

export default connect(mapStateToProps, {getAllShipments, getAllBikers, updateShipment})(DashboardContainer);