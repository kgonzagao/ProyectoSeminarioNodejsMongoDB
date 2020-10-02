const express = require('express')
const router = require('./network/routes')
const bodyParse = require('body-parser')
const response = require('./network/response')

var app = express()
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:false}))
router(app)

app.use('/',express.static('public'))
app.listen(5000)
console.log('La aplicacion está escuchando en http://localhost:5000')