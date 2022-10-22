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
var Auto = /** @class */ (function () {
    function Auto(marca, motorNum, chasisNum, dominio, titular) {
        this.marca = marca;
        this.motorNum = motorNum;
        this.chasisNum = chasisNum;
        this.dominio = dominio;
        this.titular = titular;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getMotorNum = function () {
        return this.motorNum;
    };
    Auto.prototype.getChasisNum = function () {
        return this.chasisNum;
    };
    Auto.prototype.getDominio = function () {
        return this.dominio;
    };
    Auto.prototype.getTitular = function () {
        return this.titular;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(arregloAuto) {
        this.autos = arregloAuto;
    }
    RegistroAutomotor.prototype.borrarAuto = function (arregloAuto, position) {
        delete arregloAuto[position];
    };
    RegistroAutomotor.prototype.modificarAuto = function (arregloAuto, position) {
        //editar un auto en el arreglo
        var marca = readlineSync.question("Ingrese la Marca : ");
        var motorNum = Number(readlineSync.question("Ingrese el numero de Motor : "));
        var chasisNum = Number(readlineSync.question("Ingrese el numero de Chasis : "));
        var dominio = readlineSync.question("Ingrese el dominio: ");
        var titular = readlineSync.question("Ingrese el titular: ");
        var listaAutos = arregloAuto;
        arregloAuto[position] = new Auto(marca, motorNum, chasisNum, dominio, titular);
    };
    RegistroAutomotor.prototype.nuevoAuto = function (arregloAuto) {
        //crear auto nuevo
        var marca = readlineSync.question("Ingrese la Marca : ");
        var motorNum = Number(readlineSync.question("Ingrese el numero de Motor : "));
        var chasisNum = Number(readlineSync.question("Ingrese el numero de Chasis : "));
        var dominio = readlineSync.question("Ingrese el dominio: ");
        var titular = readlineSync.question("Ingrese el titular: ");
        var listaAutos = arregloAuto;
        var nuevoAuto = new Auto(marca, motorNum, chasisNum, dominio, titular);
        listaAutos.push(nuevoAuto);
    };
    return RegistroAutomotor;
}());
//metodo para crear un nuevo auto
function crearAuto(auto, arrayAutos) {
    //transformo el elemento de tipo string en un objeto de tipo Auto
    var propiedadAuto = auto.split(',');
    var marca = propiedadAuto[0];
    var motorNum = Number(propiedadAuto[1]);
    var chasisNum = Number(propiedadAuto[2]);
    var dominio = propiedadAuto[3];
    var titular = propiedadAuto[4];
    var listaAuto = arrayAutos;
    var nuevoAuto = new Auto(marca, motorNum, chasisNum, dominio, titular);
    //inserto el elemento de tipo Auto en el arreglo recibido
    arrayAutos.push(nuevoAuto);
}
//Inicio de programa
var datosAutos = new LectorArchivos('autos.txt');
var arrayAutos = [];
var condicion = true;
var nuevoAuto = new RegistroAutomotor(arrayAutos);
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
                nuevoAuto.nuevoAuto(arrayAutos);
            }
            else {
                if (opcion == 3) {
                    var position = readlineSync.question("Ingrese la posicion a modificar: ");
                    nuevoAuto.modificarAuto(arrayAutos, position);
                }
                else {
                    if (opcion == 4) {
                        var position = readlineSync.question("Ingrese la posicion a borrar: ");
                        nuevoAuto.borrarAuto(arrayAutos, position);
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
