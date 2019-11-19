const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const auth = require('./routes/auth');
const shipments = require('./routes/shipments');
const bikers = require('./routes/bikers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', auth);
app.use('/shipments', shipments);
app.use('/bikers', bikers);

app.get('/', (req, res) => {
    res.send('Welcome!');
});


app.listen(3001, () => console.log('App listening on port 3001!'));