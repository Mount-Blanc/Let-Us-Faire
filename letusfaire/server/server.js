const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// An api endpoint that returns a short list of items

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname,'../build/index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
