import React from 'react';
import '../styles/Dashboard.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBiking, faClock, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import {STATUS_COLOR_MAPPING} from "../utils/constants";
import SearchDropdown from "./SearchDropdown";

export default (props) => {
    const {user, shipments: {isError, shipments}, bikers: {isError: isBikersError, bikers}} = props;
    console.log("bikers ==>", bikers);
    return (
        <main role="main" className="container">
            <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
                <div className="lh-100">
                    <h6 className="mb-0 text-white lh-100">{user.role.toUpperCase()}'S BOARD</h6>
                </div>
            </div>
            <div className="my-3 p-3 bg-white rounded box-shadow">
                <h6 className="border-bottom border-gray pb-2 mb-0">Shipments</h6>
                {isError && <div>Shipment load failed</div>}
                {!isError && <div>
                    {(shipments && shipments.length > 0) ?
                        <div>
                            {shipments.map(shipment => {
                                return (<div className="row pb-3 mb-0 lh-125 border-bottom border-gray pt-3" key={shipment._id}>
                                    <div className="col-9">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} className="pr-1"/>
                                        <strong className="text-gray-dark">
                                            {shipment.origin} -> {shipment.destination}
                                        </strong>
                                        <span className="d-block"><span
                                            className={"badge " + STATUS_COLOR_MAPPING[shipment.status]}>{shipment.status}</span></span>
                                        <span className="pr-4"><FontAwesomeIcon icon={faClock} className="pr-1"/> Ordered on: {new Date(shipment.orderDateTime).toDateString()}</span>
                                        {shipment.pickupDateTime && <span className="pr-4"><FontAwesomeIcon icon={faClock} className="pr-1"/> Picked up on: {new Date(shipment.pickupDateTime).toDateString()}</span>}
                                        {shipment.deliveryDateTime && <span className="pr-4"><FontAwesomeIcon icon={faClock} className="pr-1"/> Delivered on: {new Date(shipment.deliveryDateTime).toDateString()}</span>}
                                    </div>
                                    <div className="col-3">
                                        <span className="font-weight-bold d-block"><FontAwesomeIcon icon={faBiking} className="pr-1"/>Assignee</span>
                                        {shipment.status.toLowerCase() === "waiting" ?
                                            <span className="pt-2 d-block"><SearchDropdown data={bikers} onSelect={props.onBikerAssign} selectedItem={shipment.assignee} /></span> :
                                            <span className="pt-2 d-block">{shipment.assignee.name || ""}</span>
                                        }
                                    </div>
                                </div>)
                            })}
                        </div> : <div>Shipment loading...</div>}
                </div>}
            </div>
        </main>
    )
}