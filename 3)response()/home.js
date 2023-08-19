const express = require('express');
const app = express();

app.set('view engine', 'ejs')


const data = {
    "name": "Kamal",
    "id": 25,
    "info": {
        "id": 12222
    }
}

app.get('/about', function (req, res) {

    console.log(res.headersSent) // false
    // res.render('pages/about', data)
    // res.send('I am about page .')
    // res.json({ user: 'tobi' })


    // res.format({
    //     'text/plain': function () {
    //         res.send('hi')
    //     },

    //     'text/html': function () {
    //         res.send('<p>hello</p>')
    //     },

    //     'application/json': function () {
    //         res.send({ message: 'hey' })
    //     },

    //     default: function () {
    //         // log the request and respond with 406
    //         res.status(406).send('Not Acceptable')
    //     }
    // })

    res.redirect('/test')
    //res.cookie('name', 'tobi')
    res.end()
    // res.send('I am about page 2.') // does not work cause end called already
    //res.sendStatus(404)
    // res.status(404).end()
    //console.log(res.headersSent) // true

})

app.get('/test', function (req, res) {
        res.send('I am test page .')

    res.end()
})

app.listen(3000, () => {
    console.log('Listening on post 3000');
})