const express = require('express')
const router = express.Router()
const bodyParse = require('body-parser')

var app = express()
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:false}))
app.use(router)

app.get('/carrera', function(req,res){
    res.send('lista de carreras')
})

app.post('/carrera',function(req,res){
    console.log(req.body)
    console.log(req.query)
    res.status(201).send({tipo_error:0,mensaje_error:'',mensaje_exito:'exito añadio'})
})

app.use('/',express.static('public'))
app.listen(5000)
console.log('Server on puerto 500')