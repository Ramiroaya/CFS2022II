import * as fs from 'fs';
import * as readFileSync from 'readline-sync';
import * as readlineSync from 'readline-sync';
import Especialidad from './Especialidad';
import LectorArchivos from './GestorDeArchivos';
import Medico from './Medico';
import Paciente from './Paciente';
import Turno from './Turno';
import * as ReadlineSync from 'readline-sync';
import { validarEntrada,verificaOpcion,crearTurno,modificarTurno, crearMedico, nuevoMedico, borrarMedico, consultaMedico, mostrarMedico, nuevoPaciente, buscaPaciente, crearPaciente, muestraPaciente, borrarPaciente, nuevaEspecialidad, mostrarEspecialidad, borrarEspecialidad, crearEspecialidad, modificarMedico, muestraTurnos, modificarPaciente, borrarTurno } from './helper';
//import { isBreakOrContinueStatement } from 'typescript';

// Inicio del programa==>
let datosEspecialidad : LectorArchivos = new LectorArchivos('./txt/especialidad.txt');
let arregloEspecialidad : Array<Especialidad> = [];
let datosMedico: LectorArchivos = new LectorArchivos('./txt/medico.txt');
let arregloMedico: Array<Medico> = [];
let datosPaciente : LectorArchivos = new LectorArchivos('./txt/paciente.txt');
let arregloPaciente : Array<Paciente> = [];
let arregloTurno: Array<Turno> = [];
let condicion : boolean = true; 

// Creamos el arreglo con las Escpecialidades==>
for (let i:number=0; i < datosEspecialidad.getArregloString().length; i++){
    crearEspecialidad(datosEspecialidad.getArregloString()[i], arregloEspecialidad)
}
// Creamos el arreglo con los Medicos==>
for (let i:number=0; i< datosMedico.getArregloString().length; i++) {
    crearMedico(datosMedico.getArregloString()[i], arregloMedico,arregloEspecialidad);
}
//creamos el arreglo de Pacientes==>
for (let i:number=0; i< datosPaciente.getArregloString().length; i++) {
    crearPaciente(datosPaciente.getArregloString()[i], arregloPaciente);
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
    let opcion: number  = readlineSync.questionInt("Ingrese una opcion:   ");    
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
            let opcionAlta : number =readlineSync.questionInt("Ingrese una opcion:  ");
            switch (opcionAlta){
                case 1: 
                    console.log("");
                    let especialidadNueva: Especialidad = nuevaEspecialidad(arregloEspecialidad);
                    console.log("");
                    console.log(`Nueva Especialidad ingresada: ${especialidadNueva.getNombre()}`);
                    console.log("");
                    break;
                case 2: 
                    console.log("");
                    let medicoNuevo: Medico = nuevoMedico(arregloMedico,arregloEspecialidad);
                    console.log(`Nuevo Medico ingresado: ${medicoNuevo.getNombre()}, matricula: ${medicoNuevo.getMatricula()}, especialidad: ${medicoNuevo.getEspecialidad()}`);
                    console.log("");
                    break;
                case 3: 
                    console.log("");
                    let pacienteNuevo : Paciente = nuevoPaciente(arregloPaciente);
                    console.log(`Nuevo Paciente ingresado es: ${pacienteNuevo.getNombre()},con DNI: ${pacienteNuevo.getDni()}, telefono : ${pacienteNuevo.getTelefono()}, con Obra Social : ${pacienteNuevo.getObraSocial()}`);
                    console.log("");
                    break;
                default: 
                    console.log("");
                    opcionAlta = readlineSync.questionInt("Ingreso una opcion no valida, vuelva a ingresar la opcion:  ");
                    console.log("");
                let consulta: string = readlineSync.question('Desea realizar otra consulta: SI/NO:  ');
                if (verificaOpcion(consulta)==false) {
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
            let opcionModi: number = readlineSync.questionInt("Ingrese una opcion:   ");
            switch (opcionModi){
                case 1: 
                    console.log("");
                    let matricula: number = readlineSync.questionInt("Ingrese numero de Matricula:  ");
                    console.log("");
                    modificarMedico(arregloMedico,matricula);
                    console.log("");
                    break;
                case 2: 
                    console.log("");
                    let dniPaciente: number = readlineSync.questionInt("Ingrese numero de DNI:  ");
                    console.log("");
                    modificarPaciente(arregloPaciente,dniPaciente);
                    console.log("");
                    break;
                case 3: 
                    console.log("");
                    let numeroTurno :  number = readlineSync.questionInt("Ingrese el numero de Turno a modificar:   ");
                    console.log("");
                    modificarTurno(arregloTurno,arregloMedico,arregloPaciente,arregloEspecialidad,numeroTurno)
                    console.log("");
                default: 
                    console.log("");
                    opcionModi = readlineSync.question("Ingreso una opcion invalida, vuelva a ingresar la opcion:  ");
                    console.log("");
            let consulta: string = readlineSync.question('Desea realizar otra consulta: SI/NO:  ');
            if (verificaOpcion(consulta)==false) {
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
            let opcionBaja : number = readlineSync.questionInt("Ingrese la opcion:   ");
            switch (opcionBaja){
                case 1: 
                    console.log("");
                    let especialidadBaja : string = readlineSync.question("Ingrese la Especialidad a dar de baja:   ");
                    console.log("");
                    borrarEspecialidad(arregloEspecialidad,especialidadBaja);
                    console.log("");
                    break;
                case 2: 
                    console.log("");
                    let matricula: number = readlineSync.questionInt("Ingrese numero de Matricula del Medico a dar de baja:   ");
                    console.log("");
                    borrarMedico(arregloMedico,matricula);
                    console.log("");
                    break;
                case 3: 
                    console.log("");
                    let dniPaciente : number = readlineSync.questionInt("Ingrese Dni del Paciente a dar de baja:   ");
                    console.log("");
                    borrarPaciente(arregloPaciente,dniPaciente);
                    console.log("");
                    break;
                case 4: 
                    console.log("");
                    let numeroTurno : number = readlineSync.questionInt("Ingrese el numero de turno a dar de baja:   ");
                    console.log("");
                    borrarTurno(arregloTurno,numeroTurno);
                    console.log("");
                    break;
                default: 
                    console.log("");
                    opcionBaja = readlineSync.question("Ingreso una opcion invalida, vuelva a ingresar la opcion:  ");
                    console.log("");
            let consulta: string = readlineSync.question('Desea realizar otra consulta: SI/NO:  ');
            if (verificaOpcion(consulta)==false) {
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
            crearTurno(arregloTurno,arregloMedico,arregloPaciente,arregloEspecialidad);
            let consulta: string = readlineSync.question('Desea realizar otra consulta: SI/NO:  ');
            if (verificaOpcion(consulta)==false) {
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
            let opcionConsulta: number = readlineSync.questionInt("Ingrese la opcion:   ");
            switch (opcionConsulta) {
                case 1:                
                    console.log("");
                    console.log("1-Listar la totalidad de especialidades");
                    console.log("2-Consultar Medico por especialidad");
                    console.log("");
                    console.log("");
                    let opcionEspe : number = readlineSync.questionInt("Ingrese una opcion:   ");
                    switch (opcionEspe) {
                        case 1:
                            console.log("");
                            console.log(`Las Especialidades son: ${mostrarEspecialidad(arregloEspecialidad)}`);
                            console.log("");
                            break;
                        case 2:
                            console.log("");
                            console.log(`Las Especialidades son: ${mostrarEspecialidad(arregloEspecialidad)}`);
                            console.log("");
                            let especialidadConsultada : string = readlineSync.question("Ingrese la Especialidad:   ");
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
                    let opcionMedi : number = readlineSync.questionInt("Ingrese una opcion:   ");
                    if(opcionMedi ==1){ 
                        console.log("");
                        mostrarMedico(arregloMedico);
                    }else{
                        console.log("");
                        if (opcionMedi == 2){
                            console.log("");
                            let matricula: number =readlineSync.questionInt("Ingrese la Matricula a consultar:   ");
                            console.log("");
                            consultaMedico(arregloMedico,matricula);
                            console.log("");
                        }else{
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
                    let opcionPaciente: number = readlineSync.questionInt("Ingrese una opcion:   ");
                    if (opcionPaciente == 1){
                        console.log("");
                        muestraPaciente(arregloPaciente);
                        console.log("");
                    }else{
                        if (opcionPaciente == 2){
                            console.log("");
                            console.log("");
                            let dniPaciente :number =readlineSync.questionInt("Ingrese el dni del Paciente:   ");
                            console.log("");
                            console.log(buscaPaciente(arregloPaciente,dniPaciente));
                            console.log("");
                        }
                    }
                    break;
                case 4: 
                    console.log("");
                    muestraTurnos(arregloTurno,arregloMedico,arregloPaciente,arregloEspecialidad);
                    console.log("");
                    break;             
            }
            break;
        default:
            condicion = false;
        }   
    console.log("");         
    let consulta: string = readlineSync.question('Desea realizar otra consulta: SI/NO:  ');
    if (verificaOpcion(consulta)==false) {
        console.log("");
        console.log('Gracias por su consulta');
        condicion = false;
    }
}

