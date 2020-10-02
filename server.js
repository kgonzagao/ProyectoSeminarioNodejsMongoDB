const express = require('express')
const router = express.Router()
const bodyParse = require('body-parser')
const response = require('./network/response')

var app = express()
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:false}))
app.use(router)

app.get('/carrera', function(req,res){
    response.success(req,res,'Lista de Carreras de la UPS.',200)
})

app.post('/carrera',function(req,res){
    if(req.query.error == 'ok'){
        response.error(req,res,'Error al ingresar la Carrera.',500)
    }else{
        response.success(req,res,'Ingreso de Carrera exitoso',201)
    }
})

app.use('/',express.static('public'))
app.listen(5000)
console.log('Server on puerto 500')