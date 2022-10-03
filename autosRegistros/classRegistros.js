"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
// clase para leer archivos..
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';'); //vamos a tener nuestro "objetos" separados por ;
    }
    LectorArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    LectorArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return LectorArchivos;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(marca, motorNum, chasisNum, dominio, titular) {
        this.marca = marca;
        this.motorNum = motorNum;
        this.chasisNum = chasisNum;
        this.dominio = dominio;
        this.titular = titular;
    }
    RegistroAutomotor.prototype.getMarca = function () {
        return this.marca;
    };
    RegistroAutomotor.prototype.getMotorNum = function () {
        return this.motorNum;
    };
    RegistroAutomotor.prototype.getChasisNum = function () {
        return this.chasisNum;
    };
    RegistroAutomotor.prototype.getDominio = function () {
        return this.dominio;
    };
    RegistroAutomotor.prototype.getTitular = function () {
        return this.titular;
    };
    return RegistroAutomotor;
}());
//funcion para crear un nuevo auto
function crearAuto(auto, arrayAutos) {
    //transformo el elemento de tipo string en un objeto de tipo Auto
    var propiedadAuto = auto.split(',');
    var marca = propiedadAuto[0];
    var motorNum = Number(propiedadAuto[1]);
    var chasisNum = Number(propiedadAuto[2]);
    var dominio = propiedadAuto[3];
    var titular = propiedadAuto[4];
    var listaAuto = arrayAutos;
    var nuevoAuto = new RegistroAutomotor(marca, motorNum, chasisNum, dominio, titular);
    //inserto el elemento de tipo Auto en el arreglo recibido
    arrayAutos.push(nuevoAuto);
}
function borrarAuto(arregloAuto, position) {
    delete arregloAuto[position];
}
function modificarAuto(arregloAuto, position) {
    //editar un auto en el arreglo
    var marca = readlineSync.question("Ingrese la Marca : ");
    var motorNum = Number(readlineSync.question("Ingrese el numero de Motor : "));
    var chasisNum = Number(readlineSync.question("Ingrese el numero de Chasis : "));
    var dominio = readlineSync.question("Ingrese el dominio: ");
    var titular = readlineSync.question("Ingrese el titular: ");
    var listaAutos = arregloAuto;
    arregloAuto[position] = new RegistroAutomotor(marca, motorNum, chasisNum, dominio, titular);
}
function nuevoAuto(arregloAuto) {
    //crear auto nuevo
    var marca = readlineSync.question("Ingrese la Marca : ");
    var motorNum = Number(readlineSync.question("Ingrese el numero de Motor : "));
    var chasisNum = Number(readlineSync.question("Ingrese el numero de Chasis : "));
    var dominio = readlineSync.question("Ingrese el dominio: ");
    var titular = readlineSync.question("Ingrese el titular: ");
    var listaAutos = arregloAuto;
    var nuevoAuto = new RegistroAutomotor(marca, motorNum, chasisNum, dominio, titular);
    listaAutos.push(nuevoAuto);
}
//Inicio de programa
var datosAutos = new LectorArchivos('autos.txt');
var arrayAutos = [];
var condicion = true;
for (var i = 0; i < datosAutos.getArregloString().length; i++) {
    //Creo Autos uno por uno leyendo el txt        
    crearAuto(datosAutos.getArregloString()[i], arrayAutos);
}
console.log("Opciones a ingresar : 1-Ver Autos, 2-Agregar Autos, 3-Modificar Autos, 4-Borrar Autos");
var opcion = readlineSync.question("Ingrese la opcion deseada: ");
while (condicion == true) {
    if (opcion >= 1 && opcion <= 5) {
        if (opcion == 1) {
            console.log(arrayAutos);
        }
        else {
            if (opcion == 2) {
                nuevoAuto(arrayAutos);
            }
            else {
                if (opcion == 3) {
                    var position = readlineSync.question("Ingrese la posicion a modificar: ");
                    modificarAuto(arrayAutos, position);
                }
                else {
                    if (opcion == 4) {
                        var position = readlineSync.question("Ingrese la posicion a borrar: ");
                        borrarAuto(arrayAutos, position);
                    }
                    else {
                        condicion = false;
                    }
                }
            }
        }
    }
    else {
        console.log("Error, ud. no carga un valor valido del menu, por favor vuelva a intentarlo, gracias!!");
    }
    opcion = readlineSync.question("Desea hacer otra consulta, si/no: ");
    if (opcion == "si") {
        console.log("Opciones a ingresar : 1-Ver Autos, 2-Agregar Autos, 3-Modificar Autos, 4-Borrar Autos");
        opcion = readlineSync.question("Ingrese la opcion deseada: ");
    }
    else {
        console.log("Gracias por su consulta!!");
        condicion = false;
    }
}
