const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const auth = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', auth);

app.get('/', (req, res) => {
    res.send('Welcome!');
});


app.listen(3000, () => console.log('App listening on port 3000!'));