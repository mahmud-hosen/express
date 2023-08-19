const express = require('express')

const adminRouter = express.Router();


// url: http://localhost:3000/admin/
adminRouter.get('/', function (req, res) {
    res.send('I am admin dashboard.')
})


// url: http://localhost:3000/admin/login
adminRouter.get('/login', function (req, res) {
    res.send('I am login.')
})

module.exports = adminRouter