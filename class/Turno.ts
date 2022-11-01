import * as fs from 'fs';
import * as readFileSync from 'readline-sync';
import * as readlineSync from 'readline-sync';
import Medico from './Medico';
import Paciente from './Paciente';
import Horario from './Horario';
import Especialidad from './Especialidad';
import LectorArchivos from './GestorDeArchivos';
import {crearTurno, nuevoMedico} from './funciones';
import {nuevoPaciente} from './funciones';

export default class Turno {
    private num_turno: number;
    private medico : Medico;
    private paciente : Paciente;
    private horario : Horario;

    public constructor(num_turno: number, medico: Medico, paciente: Paciente, horario: Horario) {
        this.num_turno = num_turno;
        this.medico = medico;
        this.paciente = paciente;
        this.horario = horario;
    }

     public getNumTurno() : number {
        return this.num_turno;
     }
    
     public getMedico() : Medico {
        return this.medico;
    }
    
    public setMedico(nuevoNombre: Medico ) : void {
        this.medico = nuevoNombre;
    }
    
    public getPaciente() : Paciente {
        return this.paciente;
    }
    
    public setPaciente(nuevoNombre: Paciente ) : void {
        this.paciente = nuevoNombre;
    }
    
    public getHorario() : Horario {
        return this.horario;
    }
    
    public setHorario(nuevoHorario: Horario ) : void {
        this.horario = nuevoHorario;
    }
}

// Inicio del programa==>

let datosMedico: LectorArchivos = new LectorArchivos('txt/medico.txt');
let arregloMedico: Array<Medico> = [];
let datosPaciente : LectorArchivos = new LectorArchivos('txt/paciente.txt');
let arregloPaciente : Array<Paciente> = [];
let arregloTurno: Array<Turno> = [];
let condicion : boolean = true;
// Creamos el arreglo con los Medicos==>
for (let i:number=0; i< datosMedico.getArregloString().length; i++) {
    nuevoMedico(datosMedico.getArregloString()[i], arregloMedico);
}
//creamos el arreglo de Pacientes==>
for (let i:number=0; i< datosPaciente.getArregloString().length; i++) {
    nuevoPaciente(datosPaciente.getArregloString()[i], arregloPaciente);
}
while (condicion == true){
    let turno: string = readlineSync.question('Desea cargar un Turno?: si/no:  ');
    if (turno == 'si') {
        crearTurno(arregloTurno,arregloMedico,arregloPaciente);
    }else{
        console.log('Gracias por su consulta');
        condicion = false;
    }
}