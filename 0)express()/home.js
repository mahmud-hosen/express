const express = require('express');

const app = express();

// app.use(express.json()); //  It parses incoming requests with JSON payloads and is based on body-parser. Content-Type: application/json
// app.use(express.raw()); // It parses incoming request payloads into a Buffer Content-Type : application/octet-stream

// app.use(express.text()); // Content-Type : text/plain
// app.use(express.urlencoded()); // Content-Type : text/plain

app.use(express.static(`${__dirname}/public/`)); 

app.get('/', (req, res) =>{

    const requestProperties = {
        path: req.url,
        method: req.method
    }
    // console.log(requestProperties)
    res.send('This is home page.');
})

app.post('/', (req, res) =>{

    console.log(req.body);
    res.send('This is post request');
})

app.listen(3000, () => {
    console.log('Listening on post 3000');
})