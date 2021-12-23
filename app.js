const express = require('express');
// const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser');
// const connectDB = require('./config/db')
const app = express();
const port = 5000;

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__filename + 'public/css'))
app.use('/img', express.static(__filename + 'public/img'))
app.use('/js', express.static(__filename + 'public/js'))

// connectDB()

// Routers
const newRouter = require('./src/routers/home')
const loginRoute = require('./src/routers/login')

app.use('', newRouter)
app.use('', loginRoute)

// Templating Engine
// app.use(expressLayouts)
app.set('views', './src/views')
// app.use('layout', './layouts/home')
app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});