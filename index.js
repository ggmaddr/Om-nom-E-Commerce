const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/index', (req, res)=>{
    // res.render('index');
    res.send('succeed')
})
app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})