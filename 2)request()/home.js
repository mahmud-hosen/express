const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json())
app.use(cookieParser())


const adminRoute = express.Router();

app.use('/admin', adminRoute)

adminRoute.get('/dashboard/:id', function (req, res) {
  console.dir(req.originalUrl) // /admin/dashboard/5?name=kamal
  console.dir(req.baseUrl)     //  /admin
  console.dir(req.path)        //  /dashboard/5
  res.send('I am amdin dashboard!')
})

app.get('/', function (req, res) {
  console.log(req.baseUrl)
  res.send('I am home page!')
})

app.get('/user/:id', function (req, res) {
  console.dir(req.originalUrl) //  user/4?name=kamal
  console.dir(req.baseUrl)     //  ''
  console.dir(req.path)        //  /user/4 
  console.dir(req.hostname)    // localhost
  console.dir(req.ip)          // 127.0.0.1
  console.dir(req.method)      // GET
  console.dir(req.protocol)    // http
  console.dir(req.params)      // { id: '4' }
  console.dir(req.query)       // { name: 'kamal' }
  console.dir(req.body)        // { name: 'kamal' }
  console.dir(req.cookies)     // { Cookie_2: 'value', Cookie_3: 'value' }
  console.dir(req.secure)      // false for http  , true for https
  console.dir(req.route)       // false for http  , true for https
  console.dir(req.accepts('html'))       // true
  console.dir(req.get('Content-Type'))       // 'application/json'


  



  res.send('I am user page!')
})

app.post('/user/:id', function (req, res) {

  console.dir(req.body)      // { name: 'jamal' }

  res.send('I am user page post method!')
})

app.listen(3000, () => {
  console.log('Listening on post 3000');
})