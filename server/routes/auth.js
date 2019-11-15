const express = require('express');
const router = express.Router();

const users = require('../data/users');

router.post('/', (req, res) => {
    const { username, password } = req.body;

    let authUser = users.find(user =>
        user.username === username && user.password === password
    );

    if(authUser) {
        // clone authUser removing the password
        const {password, ...userInfo} = authUser;
        res.send(userInfo)
    } else {
        res.sendStatus(403)
    }
});

module.exports = router;