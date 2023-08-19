const express = require('express');
const adminRouter = require('./adminRouter')
const app = express();



app.get('/', function (req, res) {
    res.send('I am home page .')
})

// url: http://localhost:3000/admin
app.use('/admin', adminRouter)

app.listen(3000, () => {
    console.log('Listening on post 3000');
})