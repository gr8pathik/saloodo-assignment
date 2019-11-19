const express = require('express');
const router = express.Router();

const shipments = require('../data/shipment');
const users = require('../data/users');

// retrieve all shipments
router.get('/', (req, res) => {
    const shipmentsWithUser = shipments.map(shipment => {
        const userDetail = getUserById(shipment.assignee);
        return {...shipment, assignee: userDetail}
    });
    res.send(shipmentsWithUser)
});

function getUserById(userId) {
    const {password, ...userInfo} = users.find(user => user._id === userId)
    return userInfo;
}
module.exports = router;