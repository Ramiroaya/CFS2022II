"use strict";
exports.__esModule = true;
exports.crearTurno = exports.crearPaciente = exports.nuevoPaciente = exports.crearMedico = exports.nuevoMedico = exports.borrarEspecialidad = exports.nuevaEspecialidad = exports.crearEspecialidad = void 0;
var readlineSync = require("readline-sync");
var Medico_1 = require("./Medico");
var Paciente_1 = require("./Paciente");
var Horario_1 = require("./Horario");
var Especialidad_1 = require("./Especialidad");
var Turno_1 = require("./Turno");
//funciones para la clase Especialidad==>
function crearEspecialidad(especialidad, arregloEspecialidad) {
    var nuevaEspecialidad = new Especialidad_1["default"](especialidad);
    arregloEspecialidad.push(nuevaEspecialidad);
}
exports.crearEspecialidad = crearEspecialidad;
function nuevaEspecialidad(arregloEspecialidad) {
    var especialidad = readlineSync.question('Ingrese la nueva Especialidad: ');
    var nuevaEspecialidad = new Especialidad_1["default"](especialidad);
    arregloEspecialidad.push(nuevaEspecialidad);
    return nuevaEspecialidad;
}
exports.nuevaEspecialidad = nuevaEspecialidad;
function borrarEspecialidad(arregloEspecialidad, especialidad) {
}
exports.borrarEspecialidad = borrarEspecialidad;
//funcion que genera medico==>
function nuevoMedico(medico, arregloMedico) {
    var propiedadMedico = medico.split(',');
    var nombreMedico = propiedadMedico[0];
    var matriculaMedico = Number(propiedadMedico[1]);
    var especialidadMedico = new Especialidad_1["default"](propiedadMedico[2]);
    var listaMedico = arregloMedico;
    var nuevoMedico = new Medico_1["default"](nombreMedico, matriculaMedico, especialidadMedico);
    listaMedico.push(nuevoMedico);
    return listaMedico;
}
exports.nuevoMedico = nuevoMedico;
//ingresamos los datos para crear una instacia de Medico==>
function crearMedico(arregloMedico) {
    var nombreMedico = readlineSync.question('Ingrese el nombre del Medico: ');
    var matriculaMedico = readlineSync.question('Ingrese el numero de Matricula:');
    var especialidad = readlineSync.question('Ingrese la especialidad:');
    var especialidadMedico = new Especialidad_1["default"](especialidad);
    var nuevoMedico = new Medico_1["default"](nombreMedico, matriculaMedico, especialidadMedico);
    var listaMedico = arregloMedico;
    listaMedico.push(nuevoMedico);
    return nuevoMedico;
}
exports.crearMedico = crearMedico;
//funcion que genera paciente==>
function nuevoPaciente(paciente, arregloPaciente) {
    var propiedadPaciente = paciente.split(',');
    var nombrePaciente = propiedadPaciente[0];
    var dniPaciente = Number(propiedadPaciente[1]);
    var telefonoPaciente = Number(propiedadPaciente[2]);
    var obraSocialPaciente = propiedadPaciente[3];
    var nuevoPaciente = new Paciente_1["default"](nombrePaciente, dniPaciente, telefonoPaciente, obraSocialPaciente);
    var listaPaciente = arregloPaciente;
    listaPaciente.push(nuevoPaciente);
    return listaPaciente;
}
exports.nuevoPaciente = nuevoPaciente;
//ingresamos los datos para crear una instancia de Paciente==>
function crearPaciente(arregloPaciente) {
    var nombrePaciente = readlineSync.question('Ingrese nombre del paciente:');
    var dniPaciente = readlineSync.question('Ingrese DNI del paciente:');
    var telefonoPaciente = readlineSync.question('Ingrese el telefono del paciente:');
    var obraSocialPaciente = readlineSync.question('Ingrese la obra sosial del paciente:');
    var nuevoPaciente = new Paciente_1["default"](nombrePaciente, dniPaciente, telefonoPaciente, obraSocialPaciente);
    var listaPaciente = arregloPaciente;
    listaPaciente.push(nuevoPaciente);
    return nuevoPaciente;
}
exports.crearPaciente = crearPaciente;
//Funcion que crea un turno desde 0==>
function crearTurno(arregloTurno, arregloMedico, arregloPaciente) {
    var num_turno = Number(readlineSync.question('Ingrese numero de turno: '));
    var nuevoMedico = crearMedico(arregloMedico);
    var nuevoPaciente = crearPaciente(arregloPaciente);
    //ingresamos los datos para crear una instancia de Horario==>
    var fechaTurno = readlineSync.question('Ingrese la fecha del turno:');
    var horaTurno = Number(readlineSync.question('Ingrese la hora dle turno:'));
    var nuevoHorario = new Horario_1["default"](fechaTurno, horaTurno);
    var nuevoTurno = new Turno_1["default"](num_turno, nuevoMedico, nuevoPaciente, nuevoHorario);
    console.log('ud. tiene el turno n:', num_turno);
    console.log('Medico: ', nuevoMedico.getNombre());
    console.log('su nombre:', nuevoPaciente.getNombre());
    console.log('el dia: ', fechaTurno);
    console.log('a la hora: ', nuevoHorario.getHora());
    var listaTurno = arregloTurno;
    listaTurno.push(nuevoTurno);
    return nuevoTurno;
}
exports.crearTurno = crearTurno;
