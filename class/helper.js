"use strict";
exports.__esModule = true;
exports.borrarTurno = exports.muestraTurnos = exports.modificarTurno = exports.crearTurno = exports.muestraPaciente = exports.buscaPaciente = exports.borrarPaciente = exports.modificarPaciente = exports.nuevoPaciente = exports.crearPaciente = exports.mostrarMedico = exports.consultaMedicoNombre = exports.consultaMedico = exports.borrarMedico = exports.modificarMedico = exports.nuevoMedico = exports.crearMedico = exports.buscarEspecialidad = exports.mostrarEspecialidad = exports.borrarEspecialidad = exports.nuevaEspecialidad = exports.crearEspecialidad = exports.verificarEspecialidad = exports.crearNumRamdom = exports.validarEntrada = exports.verificaOpcion = void 0;
var readlineSync = require("readline-sync");
var Medico_1 = require("./Medico");
var Paciente_1 = require("./Paciente");
var Horario_1 = require("./Horario");
var Especialidad_1 = require("./Especialidad");
var Turno_1 = require("./Turno");
var Errores_1 = require("./Errores");
//Funcion que verifica la opcion SI/NO===>
function verificaOpcion(opcion) {
    var resultado = true;
    if (opcion == 'si' || opcion == 'Si' || opcion == 'SI' || opcion == 'sI') {
        return resultado;
    }
    else {
        if (opcion == 'no' || opcion == 'No' || opcion == 'NO' || opcion == 'nO') {
            resultado = false;
        }
        else {
            console.log("Ingreso una opcion no valida");
        }
    }
    return resultado;
}
exports.verificaOpcion = verificaOpcion;
//Funcion que valida entradas===>
function validarEntrada(entrada) {
    if (entrada == '') {
        throw new Errores_1["default"]('Error, campo vacio');
    }
}
exports.validarEntrada = validarEntrada;
//Funcion que crea un numero aleatoreo===>
function crearNumRamdom(max) {
    return Math.floor(Math.random() * max); //Math.floor 
}
exports.crearNumRamdom = crearNumRamdom;
function verificarEspecialidad(arregloEspecialidad, especialidad) {
    var resultado = arregloEspecialidad.filter(function (arregloEspecialidad) { return especialidad; });
    return resultado;
}
exports.verificarEspecialidad = verificarEspecialidad;
//funciones para la clase Especialidad==>
//Funcion que crea un Objeto de tipo Especialidad desde una base de datos(.txt)===>
function crearEspecialidad(especialidad, arregloEspecialidad) {
    var nuevaEspecialidad = new Especialidad_1["default"](especialidad);
    arregloEspecialidad.push(nuevaEspecialidad);
}
exports.crearEspecialidad = crearEspecialidad;
//Funcion que crea un Objeto de tipo Especialidad( de forma manual )===>
function nuevaEspecialidad(arregloEspecialidad) {
    var especialidad = readlineSync.question('Ingrese una nueva Especialidad: ');
    var nuevaEspecialidad = new Especialidad_1["default"](especialidad);
    arregloEspecialidad.push(nuevaEspecialidad);
    return nuevaEspecialidad;
}
exports.nuevaEspecialidad = nuevaEspecialidad;
//Funcion que borra un Objeto de tipo Especialidad===>
function borrarEspecialidad(arregloEspecialidad, especialidad) {
    for (var i = 0; i < arregloEspecialidad.length; i++) {
        if (arregloEspecialidad[i].getNombre() == especialidad) {
            arregloEspecialidad.splice(i, 1);
        }
    }
}
exports.borrarEspecialidad = borrarEspecialidad;
//Funcion que muestre todas las especialidades===>
function mostrarEspecialidad(arregloEspecialidad) {
    for (var i = 0; i < arregloEspecialidad.length; i++) {
        console.log(arregloEspecialidad[i]);
    }
}
exports.mostrarEspecialidad = mostrarEspecialidad;
//Funcion para buscar una Especialidad en el arreglo de las Especialidades===>
function buscarEspecialidad(arregloEspecialidad, especialidadBusca) {
    for (var i = 0; i < arregloEspecialidad.length; i++) {
        if (arregloEspecialidad[i].getNombre() == especialidadBusca) {
            return console.log("la Especialidad se encuentra en la base de datos ".concat(arregloEspecialidad[i].getNombre()));
        }
    }
}
exports.buscarEspecialidad = buscarEspecialidad;
//funcion que genera un Objeto de tipo Medico desde una base de datos(.txt)==>
function crearMedico(medico, arregloMedico, arregloEspecialidad) {
    var propiedadMedico = medico.split(',');
    var nombreMedico = propiedadMedico[0];
    var matriculaMedico = Number(propiedadMedico[1]);
    var listaMedico = arregloMedico;
    var especialidadMedico = arregloEspecialidad[crearNumRamdom(arregloEspecialidad.length)];
    var nuevoMedico = new Medico_1["default"](nombreMedico, matriculaMedico, especialidadMedico);
    listaMedico.push(nuevoMedico);
    arregloEspecialidad.push(especialidadMedico);
    return listaMedico;
}
exports.crearMedico = crearMedico;
//ingresamos los datos para crear una instacia de Medico de forma manual==>
function nuevoMedico(arregloMedico, arregloEspecialidad) {
    var nombreMedico = readlineSync.question('Ingrese el nombre y apellido del Medico:   ');
    var condicion = true;
    var nuevoMedico;
    var matriculaMedico = readlineSync.questionInt('Ingrese el numero de Matricula:   ');
    var listaMedico = arregloMedico;
    while (condicion == true) {
        for (var i = 0; i < arregloMedico.length; i++) {
            if (arregloMedico[i].getMatricula() == matriculaMedico) {
                matriculaMedico = readlineSync.questionInt("Matricula incorrecta, vuelva a ingresar la Matricula:   ");
            }
            else {
                condicion = false;
            }
        }
    }
    var especialidadMedico = arregloEspecialidad[crearNumRamdom(arregloEspecialidad.length)];
    nuevoMedico = new Medico_1["default"](nombreMedico, matriculaMedico, especialidadMedico);
    arregloEspecialidad.push(especialidadMedico);
    listaMedico.push(nuevoMedico);
    return nuevoMedico;
}
exports.nuevoMedico = nuevoMedico;
//Funcion para modificar el Medico, ingresando el numero de Matricula===>
function modificarMedico(arregloMedico, matricula) {
    var opcion;
    for (var i = 0; i < arregloMedico.length; i++) {
        if (arregloMedico[i].getMatricula() == matricula) {
            var condicion = true;
            while (condicion == true) {
                opcion = readlineSync.question("Desea cambiar el nombre y apellido del Medico?  SI/NO");
                if (verificaOpcion(opcion) == true) {
                    arregloMedico[i].setNombre(readlineSync.question("Ingrese nuevo nombre y apellido:   "));
                }
                else {
                    opcion = readlineSync.question("Desea cambiar la Especialidad del Medico?  SI/NO");
                    if (verificaOpcion(opcion) == true) {
                        arregloMedico[i].setEspecialidad(readlineSync.question("Ingrese nueva Especialidad:   "));
                    }
                }
            }
            console.log("El medico ".concat(arregloMedico[i].getNombre(), " a sido modificado"));
        }
        else {
            console.log("Matricula invalida, vuelva a intentar, gracias");
        }
    }
}
exports.modificarMedico = modificarMedico;
// Funcion para eliminar un Medico===>
function borrarMedico(arregloMedico, matricula) {
    for (var i = 0; i < arregloMedico.length; i++) {
        if (matricula == arregloMedico[i].getMatricula()) {
            arregloMedico.splice(i, 1);
            console.log("El medico ha sido eliminado");
        }
        else {
            console.log("La matricula ingresada no es valida");
        }
    }
}
exports.borrarMedico = borrarMedico;
// Funcion para consultar sobre el Medico===>
function consultaMedico(arregloMedico, matricula) {
    for (var i = 0; i < arregloMedico.length; i++) {
        if (matricula == arregloMedico[i].getMatricula()) {
            console.log("");
            return console.log("El Medico: ".concat(arregloMedico[i].getNombre(), ", con Matricula: ").concat(arregloMedico[i].getMatricula(), ", tiene la Especialidad de:").concat(arregloMedico[i].getEspecialidad()));
        }
        else {
            console.log("");
            return console.log("La matricula ingresada no es valida");
        }
    }
}
exports.consultaMedico = consultaMedico;
function consultaMedicoNombre(arregloMedico, arregloEspecialidad, nombreMedico) {
    for (var i = 0; i < arregloMedico.length; i++) {
        if (nombreMedico == arregloMedico[i].getNombre()) {
            console.log("");
            console.log("El Medico: ".concat(arregloMedico[i].getNombre(), ", con Matricula: ").concat(arregloMedico[i].getMatricula(), ", tiene la Especialidad de:").concat(arregloMedico[i].getEspecialidad()));
            return arregloMedico[i];
        }
        else {
            console.log("");
            console.log("El Medico que ingresa no existe");
            console.log("");
            var opcion = readlineSync.question("Desea hacer el alta del Medico? SI/NO:   ");
            if (verificaOpcion(opcion) == true) {
                return nuevoMedico(arregloMedico, arregloEspecialidad);
            }
        }
    }
}
exports.consultaMedicoNombre = consultaMedicoNombre;
//Funcion que muestre todas los Medicos===>
function mostrarMedico(arregloMedico) {
    for (var i = 0; i < arregloMedico.length; i++) {
        console.log("El medico ".concat(arregloMedico[i].getNombre(), ",con Matricula: ").concat(arregloMedico[i].getMatricula(), ",  su Especialidad es: ").concat(arregloMedico[i].getEspecialidad()));
    }
}
exports.mostrarMedico = mostrarMedico;
//Funcion que muestre los Medicos por Especialidad en particular===>
/*export function mostrarMedicoEspecialidad(arregloMedico: Array<Medico>, especialidad:string){
    for(let i:number = 0;i<arregloMedico.length;i++){
        if (especialidad == arregloMedico[i].getEspecialidad()){
            console.log(`El medico ${arregloMedico[i].getNombre()}, Matricula: ${arregloMedico[i].getMatricula()}, y su Especialidad es: ${arregloMedico[i].getEspecialidad()}`);
        }
    }
    //arregloMedico.filter(arregloMedico.getEspecialidad()==especialidad);
}*/
//funcion que genera paciente==>
function crearPaciente(paciente, arregloPaciente) {
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
exports.crearPaciente = crearPaciente;
//ingresamos los datos para crear una instancia de Paciente==>
function nuevoPaciente(arregloPaciente) {
    var nombrePaciente = readlineSync.question('Ingrese nombre del paciente:');
    var dniPaciente = readlineSync.question('Ingrese DNI del paciente:');
    var telefonoPaciente = readlineSync.question('Ingrese el telefono del paciente:');
    var obraSocialPaciente = readlineSync.question('Ingrese la obra sosial del paciente:');
    var nuevoPaciente = new Paciente_1["default"](nombrePaciente, dniPaciente, telefonoPaciente, obraSocialPaciente);
    var listaPaciente = arregloPaciente;
    listaPaciente.push(nuevoPaciente);
    return nuevoPaciente;
}
exports.nuevoPaciente = nuevoPaciente;
//Funcion para modificar algun dato del Paciente===>
function modificarPaciente(arregloPaciente, dniPaciente) {
    for (var i = 0; i < arregloPaciente.length; i++) {
        if (dniPaciente == arregloPaciente[i].getDni()) {
            arregloPaciente[i].setNombre(readlineSync.question("Ingrese modifcacion de nombre en caso que coresponda: "));
            arregloPaciente[i].setTelefono(readlineSync.questionInt("Ingrese nuevo telefono en caso que corresponda:  "));
            arregloPaciente[i].setObraSocial(readlineSync.question("Ingrese nueva Obra Social en caso que corresponda:  "));
            console.log("Gracias, paciente modificado!!");
        }
    }
}
exports.modificarPaciente = modificarPaciente;
//Funcion para borrar un Paciente===>
function borrarPaciente(arregloPaciente, dniPaciente) {
    for (var i = 0; i < arregloPaciente.length; i++) {
        if (arregloPaciente[i].getDni() == dniPaciente) {
            arregloPaciente.splice(i, 1);
            console.log("El Paciente a sido borrado, gracias!!");
        }
    }
}
exports.borrarPaciente = borrarPaciente;
//Funcion para mostrar algun dato del Paciente===>
function buscaPaciente(arregloPaciente, dniPaciente) {
    for (var i = 0; i < arregloPaciente.length; i++) {
        if (arregloPaciente[i].getDni() == dniPaciente) {
            return arregloPaciente[i];
        }
        else {
            return console.log("El DNI es invalido, vuelva a probar");
        }
    }
}
exports.buscaPaciente = buscaPaciente;
//Funcion para mostrar todos los Paciente===>
function muestraPaciente(arregloPaciente) {
    for (var i = 0; i < arregloPaciente.length; i++) {
        console.log("El paciente ".concat(arregloPaciente[i].getNombre(), " con DNI: ").concat(arregloPaciente[i].getDni(), ", telefono: ").concat(arregloPaciente[i].getTelefono(), ", tiene como Obra Social : ").concat(arregloPaciente[i].getObraSocial()));
    }
}
exports.muestraPaciente = muestraPaciente;
//Funcion que crea un turno desde 0==>
function crearTurno(arregloTurno, arregloMedico, arregloPaciente, arregloEspecialidad) {
    var num_turno = arregloTurno.length + 1;
    var nombreMedico = readlineSync.question("Ingrese el nombre y apellido del Medico");
    var medicoNuevo = consultaMedicoNombre(arregloMedico, arregloEspecialidad, nombreMedico);
    var pacienteNuevo = nuevoPaciente(arregloPaciente);
    //ingresamos los datos para crear una instancia de Horario==>
    var fechaTurno = readlineSync.question('Ingrese la fecha del turno:');
    var horaTurno = readlineSync.questionInt('Ingrese la hora del turno:');
    var nuevoHorario = new Horario_1["default"](fechaTurno, horaTurno);
    var nuevoTurno = new Turno_1["default"](num_turno, medicoNuevo, pacienteNuevo, nuevoHorario);
    console.log("ud. tiene el turno n: ".concat(num_turno, ", con el Medico: ").concat(medicoNuevo.getNombre(), ", paciente: ").concat(pacienteNuevo.getNombre(), ", el dia : ").concat(fechaTurno, " a la hora: ").concat(nuevoHorario.getHora()));
    var listaTurno = arregloTurno;
    listaTurno.push(nuevoTurno);
    return nuevoTurno;
}
exports.crearTurno = crearTurno;
//Funcion que modifica algun parametro del Turno==>
function modificarTurno(arregloTurno, arregloMedico, arregloPaciente, arregloEspecialidad, num_Turno) {
    for (var i = 0; i < arregloTurno.length; i++) {
        if (arregloTurno[i].getNumTurno() == num_Turno) {
            console.log("ud. quiere modificar el turno n: ".concat(num_Turno, ", con el Medico: ").concat(arregloTurno[i].getMedico(), ", paciente: ").concat(arregloTurno[i].getPaciente(), ", con horario ").concat(arregloTurno[i].getHorario()));
            var opcionTurno = readlineSync.question("SI/NO:   ");
            if (verificaOpcion(opcionTurno) == true) {
                arregloTurno[i].setMedico(readlineSync.question("Ingrese el nuevo Medico en caso que corresponda:   "));
                arregloTurno[i].setPaciente(readlineSync.question("Ingrese el nuevo Paciente en caso que corresponda:   "));
                arregloTurno[i].setHorario(readlineSync.question("Ingrese el nuevo Horario en caso que corresponda:   "));
                console.log("ud. quiere modificar el turno n: ".concat(num_Turno, ", con el Medico: ").concat(arregloTurno[i].getMedico(), ", paciente: ").concat(arregloTurno[i].getPaciente(), ", con horario ").concat(arregloTurno[i].getHorario()));
            }
            else {
                console.log("Gracias!!");
            }
        }
        else {
            console.log("Ingreso un numero de Turno no valido");
        }
    }
    return arregloTurno;
}
exports.modificarTurno = modificarTurno;
//Funcion  que muestra los turnos===>
function muestraTurnos(arregloTurno, arregloMedico, arregloPaciente, arregloEspecialidad, num_Turno) {
    for (var i = 0; i < arregloTurno.length; i++) {
        console.log(" el turno n: ".concat(arregloTurno[i].getNumTurno(), ", con el Medico: ").concat(arregloTurno[i].getMedico(), ", paciente: ").concat(arregloTurno[i].getPaciente(), ", el dia : ").concat(arregloTurno[i].getHorario()));
    }
}
exports.muestraTurnos = muestraTurnos;
//Funcion que borra un turno, ingresando su numero===>
function borrarTurno(arregloTurno, numeroTurno) {
    for (var i = 0; i < arregloTurno.length; i++) {
        if (numeroTurno == arregloTurno[i].getNumTurno()) {
            console.log("El siguiente Turno va a ser dado de baja");
            console.log(" el turno n: ".concat(arregloTurno[i].getNumTurno(), ", con el Medico: ").concat(arregloTurno[i].getMedico(), ", paciente: ").concat(arregloTurno[i].getPaciente(), ", el dia : ").concat(arregloTurno[i].getHorario()));
            var opcion = readlineSync.question('Confirma la baja?Si/No:   ');
            if (verificaOpcion(opcion) == true) {
                arregloTurno.splice(i, 1);
            }
            else {
                if (verificaOpcion(opcion) == false) {
                    console.log("Vuelva a ingresar el numero de turno");
                }
                else {
                    console.log("Ud. ingreso una opcion no valida");
                }
            }
        }
        else {
            console.log("numero de Turno invalido");
        }
    }
}
exports.borrarTurno = borrarTurno;
