const express = require('express');

const app = express();


app.set('title', 'My Site')  // Set a value in a variable @Ref:1
app.set('view engine', 'ejs')


app.all('/about', (req, res) =>{
    res.send('I accept all method.');
    console.log(app.get('title')) /// Get value @Ref:1
})

app.get('/', (req, res) =>{
    res.send('This is home page.');
})

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send('This is post request');
})

//template
app.get('/info', (req, res) =>{

    const data = {
        title: 'My EJS Example',
        message: 'Hello, EJS!'
      };
    res.render('pages/about',data);
})

// Route
app.route('/admin')
  .get(function (req, res) {
    res.send('This is admin get.');
  })
  .post(function (req, res) {
    res.send('This is admin post.');
  })
  .put(function (req, res) {
    res.send('This is admin put.');
  })

app.param('id', function (req, res, next, id) {

    const userinfo = {
        userId: id,
        name: 'Bangladesh'
    }
    req.userDetails = userinfo;
    next()
  })

app.get('/user/:id', (req, res) =>{
        console.log(req.userDetails);
        res.send('This is user page.');
})

app.listen(3000, () => {
    console.log('Listening on post 3000');
})