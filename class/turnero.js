"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var GestorDeArchivos_1 = require("./GestorDeArchivos");
var helper_1 = require("./helper");
//import { isBreakOrContinueStatement } from 'typescript';
// Inicio del programa==>
var datosEspecialidad = new GestorDeArchivos_1["default"]('./txt/especialidad.txt');
var arregloEspecialidad = [];
var datosMedico = new GestorDeArchivos_1["default"]('./txt/medico.txt');
var arregloMedico = [];
var datosPaciente = new GestorDeArchivos_1["default"]('./txt/paciente.txt');
var arregloPaciente = [];
var arregloTurno = [];
var condicion = true;
// Creamos el arreglo con las Escpecialidades==>
for (var i = 0; i < datosEspecialidad.getArregloString().length; i++) {
    (0, helper_1.crearEspecialidad)(datosEspecialidad.getArregloString()[i], arregloEspecialidad);
}
// Creamos el arreglo con los Medicos==>
for (var i = 0; i < datosMedico.getArregloString().length; i++) {
    (0, helper_1.crearMedico)(datosMedico.getArregloString()[i], arregloMedico, arregloEspecialidad);
}
//creamos el arreglo de Pacientes==>
for (var i = 0; i < datosPaciente.getArregloString().length; i++) {
    (0, helper_1.crearPaciente)(datosPaciente.getArregloString()[i], arregloPaciente);
}
while (condicion == true) {
    console.log("-----------------------------------------MENU DE INICIO-------------------------------------------------------");
    console.log("");
    console.log("1-Altas");
    console.log("2-Modificaiones");
    console.log("3-Bajas");
    console.log("4-Solicitar Turno");
    console.log("5-Consultas");
    console.log("6-Salir del Menu");
    console.log("");
    console.log("");
    var opcion = readlineSync.questionInt("Ingrese una opcion:   ");
    switch (opcion) {
        case 1:
            console.log("");
            console.log("----------ALTAS----------");
            console.log("");
            console.log("1-Especialidad");
            console.log("2-Medico");
            console.log("3-Paciente");
            console.log("");
            console.log("");
            var opcionAlta = readlineSync.questionInt("Ingrese una opcion:  ");
            switch (opcionAlta) {
                case 1:
                    console.log("");
                    var especialidadNueva = (0, helper_1.nuevaEspecialidad)(arregloEspecialidad);
                    console.log("");
                    console.log("Nueva Especialidad ingresada: ".concat(especialidadNueva.getNombre()));
                    console.log("");
                    break;
                case 2:
                    console.log("");
                    var medicoNuevo = (0, helper_1.nuevoMedico)(arregloMedico, arregloEspecialidad);
                    console.log("Nuevo Medico ingresado: ".concat(medicoNuevo.getNombre(), ", matricula: ").concat(medicoNuevo.getMatricula(), ", especialidad: ").concat(medicoNuevo.getEspecialidad()));
                    console.log("");
                    break;
                case 3:
                    console.log("");
                    var pacienteNuevo = (0, helper_1.nuevoPaciente)(arregloPaciente);
                    console.log("Nuevo Paciente ingresado es: ".concat(pacienteNuevo.getNombre(), ",con DNI: ").concat(pacienteNuevo.getDni(), ", telefono : ").concat(pacienteNuevo.getTelefono(), ", con Obra Social : ").concat(pacienteNuevo.getObraSocial()));
                    console.log("");
                    break;
                default:
                    console.log("");
                    opcionAlta = readlineSync.questionInt("Ingreso una opcion no valida, vuelva a ingresar la opcion:  ");
                    console.log("");
                    var consulta_1 = readlineSync.question('Desea realizar otra consulta: SI/NO:  ');
                    if ((0, helper_1.verificaOpcion)(consulta_1) == false) {
                        console.log("");
                        console.log('Gracias por su consulta');
                        condicion = false;
                    }
            }
            break;
        case 2:
            console.log("");
            console.log("----------MODIFICAIONES----------");
            console.log("");
            console.log("1-Medico");
            console.log("2-Paciente");
            console.log("3-Turno");
            console.log("");
            console.log("");
            var opcionModi = readlineSync.questionInt("Ingrese una opcion:   ");
            switch (opcionModi) {
                case 1:
                    console.log("");
                    var matricula = readlineSync.questionInt("Ingrese numero de Matricula:  ");
                    console.log("");
                    (0, helper_1.modificarMedico)(arregloMedico, matricula);
                    console.log("");
                    break;
                case 2:
                    console.log("");
                    var dniPaciente = readlineSync.questionInt("Ingrese numero de DNI:  ");
                    console.log("");
                    (0, helper_1.modificarPaciente)(arregloPaciente, dniPaciente);
                    console.log("");
                    break;
                case 3:
                    console.log("");
                    var numeroTurno = readlineSync.questionInt("Ingrese el numero de Turno a modificar:   ");
                    console.log("");
                    (0, helper_1.modificarTurno)(arregloTurno, arregloMedico, arregloPaciente, arregloEspecialidad, numeroTurno);
                    console.log("");
                default:
                    console.log("");
                    opcionModi = readlineSync.question("Ingreso una opcion invalida, vuelva a ingresar la opcion:  ");
                    console.log("");
                    var consulta_2 = readlineSync.question('Desea realizar otra consulta: SI/NO:  ');
                    if ((0, helper_1.verificaOpcion)(consulta_2) == false) {
                        console.log("");
                        console.log('Gracias por su consulta');
                        condicion = false;
                    }
            }
            break;
        case 3:
            console.log("");
            console.log("----------BAJAS----------");
            console.log("");
            console.log("1-Especialidad");
            console.log("2-Medico");
            console.log("3-Paciente");
            console.log("4-Turno");
            console.log("");
            console.log("");
            var opcionBaja = readlineSync.questionInt("Ingrese la opcion:   ");
            switch (opcionBaja) {
                case 1:
                    console.log("");
                    var especialidadBaja = readlineSync.question("Ingrese la Especialidad a dar de baja:   ");
                    console.log("");
                    (0, helper_1.borrarEspecialidad)(arregloEspecialidad, especialidadBaja);
                    console.log("");
                    break;
                case 2:
                    console.log("");
                    var matricula = readlineSync.questionInt("Ingrese numero de Matricula del Medico a dar de baja:   ");
                    console.log("");
                    (0, helper_1.borrarMedico)(arregloMedico, matricula);
                    console.log("");
                    break;
                case 3:
                    console.log("");
                    var dniPaciente = readlineSync.questionInt("Ingrese Dni del Paciente a dar de baja:   ");
                    console.log("");
                    (0, helper_1.borrarPaciente)(arregloPaciente, dniPaciente);
                    console.log("");
                    break;
                case 4:
                    console.log("");
                    var numeroTurno = readlineSync.questionInt("Ingrese el numero de turno a dar de baja:   ");
                    console.log("");
                    (0, helper_1.borrarTurno)(arregloTurno, numeroTurno);
                    console.log("");
                    break;
                default:
                    console.log("");
                    opcionBaja = readlineSync.question("Ingreso una opcion invalida, vuelva a ingresar la opcion:  ");
                    console.log("");
                    var consulta_3 = readlineSync.question('Desea realizar otra consulta: SI/NO:  ');
                    if ((0, helper_1.verificaOpcion)(consulta_3) == false) {
                        console.log("");
                        console.log('Gracias por su consulta');
                        condicion = false;
                    }
            }
            break;
        case 4:
            console.log("");
            console.log("----------SOLICTAR TURNO----------");
            console.log("");
            (0, helper_1.crearTurno)(arregloTurno, arregloMedico, arregloPaciente, arregloEspecialidad);
            var consulta_4 = readlineSync.question('Desea realizar otra consulta: SI/NO:  ');
            if ((0, helper_1.verificaOpcion)(consulta_4) == false) {
                console.log("");
                console.log('Gracias por su consulta');
                condicion = false;
            }
            break;
        case 5:
            console.log("");
            console.log("----------CONSULTAS----------");
            console.log("");
            console.log("1-Especialidad");
            console.log("2-Medico");
            console.log("3-Paciente");
            console.log("4-Turnos");
            console.log("");
            console.log("");
            var opcionConsulta = readlineSync.questionInt("Ingrese la opcion:   ");
            switch (opcionConsulta) {
                case 1:
                    console.log("");
                    console.log("1-Listar la totalidad de especialidades");
                    console.log("2-Consultar Medico por especialidad");
                    console.log("");
                    console.log("");
                    var opcionEspe = readlineSync.questionInt("Ingrese una opcion:   ");
                    switch (opcionEspe) {
                        case 1:
                            console.log("");
                            console.log("Las Especialidades son: ".concat((0, helper_1.mostrarEspecialidad)(arregloEspecialidad)));
                            console.log("");
                            break;
                        case 2:
                            console.log("");
                            console.log("Las Especialidades son: ".concat((0, helper_1.mostrarEspecialidad)(arregloEspecialidad)));
                            console.log("");
                            var especialidadConsultada = readlineSync.question("Ingrese la Especialidad:   ");
                            console.log("");
                            // mostrarMedicoEspecialidad(arregloMedico,especialidadConsultada);
                            console.log("");
                            break;
                    }
                    break;
                case 2:
                    console.log("");
                    console.log("1-Listar todos los Medicos");
                    console.log("2-Listas por Medico");
                    console.log("");
                    console.log("");
                    var opcionMedi = readlineSync.questionInt("Ingrese una opcion:   ");
                    if (opcionMedi == 1) {
                        console.log("");
                        (0, helper_1.mostrarMedico)(arregloMedico);
                    }
                    else {
                        console.log("");
                        if (opcionMedi == 2) {
                            console.log("");
                            var matricula = readlineSync.questionInt("Ingrese la Matricula a consultar:   ");
                            console.log("");
                            (0, helper_1.consultaMedico)(arregloMedico, matricula);
                            console.log("");
                        }
                        else {
                            console.log("");
                            opcionMedi = readlineSync.questionInt("Ingreso una opcion invalida, vuelva a ingresar la opcion: ");
                            console.log("");
                        }
                    }
                    break;
                case 3:
                    console.log("");
                    console.log("1-Listar todos los Pacientes ");
                    console.log("2-Listar por Paciente ");
                    console.log("");
                    console.log("");
                    var opcionPaciente = readlineSync.questionInt("Ingrese una opcion:   ");
                    if (opcionPaciente == 1) {
                        console.log("");
                        (0, helper_1.muestraPaciente)(arregloPaciente);
                        console.log("");
                    }
                    else {
                        if (opcionPaciente == 2) {
                            console.log("");
                            console.log("");
                            var dniPaciente = readlineSync.questionInt("Ingrese el dni del Paciente:   ");
                            console.log("");
                            console.log((0, helper_1.buscaPaciente)(arregloPaciente, dniPaciente));
                            console.log("");
                        }
                    }
                    break;
                case 4:
                    console.log("");
                    (0, helper_1.muestraTurnos)(arregloTurno, arregloMedico, arregloPaciente, arregloEspecialidad);
                    console.log("");
                    break;
            }
            break;
        default:
            condicion = false;
    }
    console.log("");
    var consulta = readlineSync.question('Desea realizar otra consulta: SI/NO:  ');
    if ((0, helper_1.verificaOpcion)(consulta) == false) {
        console.log("");
        console.log('Gracias por su consulta');
        condicion = false;
    }
}
