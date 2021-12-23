const express = require('express')
const loginRoute = express.Router()
const axios = require('axios')

loginRoute.get('/login', async (req, res) => {
    res.render('login.ejs');
})
module.exports = loginRoute