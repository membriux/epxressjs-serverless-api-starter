const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.options('*', cors());

// API Endpoints
app.get('/', (req, res) => {
    return res.send('We are just getting started!!!')
});


// No need to modify this for Heroku deployment
app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
