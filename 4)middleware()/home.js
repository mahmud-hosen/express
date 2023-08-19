const express = require('express');
const app = express();

const adminRoute = express.Router();

const logger = (req, res, next) => {
    console.log("I am logger.")

    throw new Error ('This is an error.')
    // next()
}

adminRoute.use(logger)

adminRoute.get('/dashboard', function (req, res) {
    console.log("I am dashboard.")
    res.send('I am dashboard.')
})

app.use('/admin', adminRoute)

app.get('/about', function (req, res) {
    res.send('I am about page .')
    res.end()
})

const errorMiddleware = (err, req, res, next) =>{
    console.log(err.message)
    res.status(500).send('This is a error.')

}

adminRoute.use(errorMiddleware)

app.listen(3000, () => {
    console.log('Listening on post 3000');
})