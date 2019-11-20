const express = require('express');
const router = express.Router();

let shipments = require('../data/shipment');
const users = require('../data/users');

// retrieve all shipments
router.get('/', (req, res) => {
    const shipmentsWithUser = shipments.map(shipment => {
        const userDetail = shipment.assignee ? getUserById(shipment.assignee) : "";
        return {...shipment, assignee: userDetail}
    });
    res.send(shipmentsWithUser)
});

router.put('/:shipmentId', (req, res) => {
    const shipmentData = req.body;
    const shipmentId = req.params.shipmentId;
    shipments.forEach((shipment, index) => {
        if(shipmentId === shipment._id) {
            shipments[index] = { ...shipment, ...shipmentData }
        }
    });
    res.send("Shipment updated")
});

function getUserById(userId) {
    const {password, ...userInfo} = users.find(user => user._id === userId);
    return userInfo;
}
module.exports = router;