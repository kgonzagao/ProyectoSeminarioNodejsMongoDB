const list=[]

function addCarrera(Objeto){
    list.push(Objeto)
}

function getCarreras(){
    return list
}

module.exports ={
    add: addCarrera,
    get: getCarreras
}