import * as fs from 'fs';
import * as readFileSync from 'readline-sync';
import * as readlineSync from 'readline-sync';
import Medico from './Medico';
import Paciente from './Paciente';
import Horario from './Horario';
import Especialidad from './Especialidad';
import Turno from './Turno';
import GestorDeArchivos from './GestorDeArchivos';

//funcion que genera medico==>

export function nuevoMedico(medico: string, arregloMedico: Array<Medico>) {
    let propiedadMedico: string[] = medico.split(',');
    let nombreMedico : string = propiedadMedico[0];
    let matriculaMedico : number = Number(propiedadMedico[1]);
    let especialidadMedico : Especialidad = new Especialidad(propiedadMedico[2]); 
    let listaMedico : Array<Medico> = arregloMedico;
    let nuevoMedico: Medico = new Medico(nombreMedico,matriculaMedico,especialidadMedico);
    listaMedico.push(nuevoMedico);
}
export function nuevoPaciente(paciente: string, arregloPaciente: Array<Paciente>) {
    let propiedadPaciente: string[] = paciente.split(',');
    let nombrePaciente: string = propiedadPaciente[0];
    let dniPaciente : number = Number(propiedadPaciente[1]);
    let telefonoPaciente : number = Number(propiedadPaciente[2]);
    let obraSocialPaciente : string = propiedadPaciente[3]; 
    let nuevoPaciente: Paciente = new Paciente(nombrePaciente,dniPaciente,telefonoPaciente,obraSocialPaciente);
    let listaPaciente : Array<Paciente>  = arregloPaciente;
    listaPaciente.push(nuevoPaciente);
}
//ingresamos los datos para crear una instacia de Medico==>
export function crearMedico(arregloMedico:Array<Medico>):Medico {
    let nombreMedico : string = readlineSync.question('Ingrese el nombre del Medico: ');
    let matriculaMedico : number = Number(readlineSync.question('Ingrese el numero de Matricula:'));
    let especialidad : string = readlineSync.question('Ingrese la especialidad:');
    let especialidadMedico :  Especialidad = new Especialidad(especialidad); 
    let nuevoMedico: Medico = new Medico(nombreMedico,matriculaMedico,especialidadMedico);
    let listaMedico : Array<Medico> = arregloMedico;
    listaMedico.push(nuevoMedico);
    return nuevoMedico;
}
 //ingresamos los datos para crear una instancia de Paciente==>
 export function crearPaciente(arregloPaciente:Array<Paciente>):Paciente {
     let nombrePaciente : string = readlineSync.question('Ingrese nombre del paciente:');
     let dniPaciente : number = Number(readlineSync.question('Ingrese DNI del paciente:'));
     let telefonoPaciente : number = Number(readlineSync.question('Ingrese el telefono del paciente:'));
     let obraSocialPaciente : string = readlineSync.question('Ingrese la obra sosial del paciente:');
     let nuevoPaciente: Paciente = new Paciente(nombrePaciente,dniPaciente,telefonoPaciente,obraSocialPaciente);
     let listaPaciente : Array<Paciente> = arregloPaciente;
     listaPaciente.push(nuevoPaciente);
     return nuevoPaciente;
}
//Funcion que crea un turno desde 0==>
export function crearTurno(arregloTurno:Array<Turno>,arregloMedico:Array<Medico>,arregloPaciente:Array<Paciente>):Turno {
    let num_turno: number = Number(readlineSync.question('Ingrese numero de turno: '));
    let nuevoMedico = crearMedico(arregloMedico);
    let nuevoPaciente = crearPaciente(arregloPaciente);
    //ingresamos los datos para crear una instancia de Horario==>
    let fechaTurno: string = readlineSync.question('Ingrese la fecha del turno:');
    let horaTurno : number = Number(readlineSync.question('Ingrese la hora dle turno:'));
    let nuevoHorario: Horario = new Horario(fechaTurno,horaTurno);
    let nuevoTurno : Turno = new Turno(num_turno,nuevoMedico,nuevoPaciente,nuevoHorario);
    console.log('ud. tiene el turno n:',num_turno);
    console.log('Medico: ',nuevoMedico.getNombre());
    console.log('su nombre:',nuevoPaciente.getNombre());
    console.log('el dia: ',fechaTurno);
    console.log('a la hora: ', nuevoHorario.getHora());
    let listaTurno : Array<Turno> = arregloTurno;
    listaTurno.push(nuevoTurno);
    return nuevoTurno;

}