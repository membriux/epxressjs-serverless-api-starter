const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.options('*', cors());

// Add your database connections here (i.e. AWS, Firebase, Parse, etc)


// API Endpoints
app.get('/', (req, res) => {
    return res.send(JSON.stringify({
        'fruits' : ['apple', 'banana', 'orange']
    }))
});


// No need to modify this for Heroku deployment
app.listen(process.env.PORT || 3000, function() {
    console.log('App running on \nlocalhost:3000', '');
});
