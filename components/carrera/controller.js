const { resolve } = require('path')
const storage=require('./storage')

function addCarrera(nombre,descripcion){
    return new Promise((resolve,reject)=>{
        let carrera={
            nombre:nombre,
            descripcion:descripcion,
        }
        storage.add(carrera)
        resolve(carrera)
    })
}

function getCarreras(){
    return new Promise((resolve,reject)=>{
        resolve(storage.get())
    })
}

module.exports={
    addCarrera,
    getCarreras,

}