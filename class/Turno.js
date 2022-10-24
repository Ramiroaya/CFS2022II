"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var GestorDeArchivos_1 = require("./GestorDeArchivos");
var funciones_1 = require("./funciones");
var funciones_2 = require("./funciones");
var Turno = /** @class */ (function () {
    function Turno(num_turno, medico, paciente, horario) {
        this.num_turno = num_turno;
        this.medico = medico;
        this.paciente = paciente;
        this.horario = horario;
    }
    Turno.prototype.getNumTurno = function () {
        return this.num_turno;
    };
    Turno.prototype.getMedico = function () {
        return this.medico;
    };
    Turno.prototype.setMedico = function (nuevoNombre) {
        this.medico = nuevoNombre;
    };
    Turno.prototype.getPaciente = function () {
        return this.paciente;
    };
    Turno.prototype.setPaciente = function (nuevoNombre) {
        this.paciente = nuevoNombre;
    };
    Turno.prototype.getHorario = function () {
        return this.horario;
    };
    Turno.prototype.setHorario = function (nuevoHorario) {
        this.horario = nuevoHorario;
    };
    return Turno;
}());
exports["default"] = Turno;
// Inicio del programa==>
var datosMedico = new GestorDeArchivos_1["default"]('txt/medico.txt');
var arregloMedico = [];
var datosPaciente = new GestorDeArchivos_1["default"]('txt/paciente.txt');
var arregloPaciente = [];
var arregloTurno = [];
var condicion = true;
// Creamos el arreglo con los Medicos==>
for (var i = 0; i < datosMedico.getArregloString().length; i++) {
    (0, funciones_1.nuevoMedico)(datosMedico.getArregloString()[i], arregloMedico);
}
//creamos el arreglo de Pacientes==>
for (var i = 0; i < datosPaciente.getArregloString().length; i++) {
    (0, funciones_2.nuevoPaciente)(datosPaciente.getArregloString()[i], arregloPaciente);
}
while (condicion == true) {
    var turno = readlineSync.question('Desea cargar un Turno?: si/no:  ');
    if (turno == 'si') {
        (0, funciones_1.crearTurno)(arregloTurno, arregloMedico, arregloPaciente);
    }
    else {
        console.log('Gracias por su consulta');
        condicion = false;
    }
}
