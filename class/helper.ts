import * as fs from 'fs';
import * as readFileSync from 'readline-sync';
import * as readlineSync from 'readline-sync';
import Medico from './Medico';
import Paciente from './Paciente';
import Horario from './Horario';
import Especialidad from './Especialidad';
import Turno from './Turno';
import ErrorValidacion from './Errores';
import GestorDeArchivos from './GestorDeArchivos';
import * as ReadlineSync from 'readline-sync';

//Funcion que verifica la opcion SI/NO===>
export function verificaOpcion(opcion:string):boolean{
    let resultado : boolean = true;
    if (opcion == 'si'|| opcion == 'Si' || opcion == 'SI' || opcion == 'sI'){
        return resultado 
    }else{
        if (opcion == 'no' || opcion == 'No' || opcion == 'NO' || opcion == 'nO'){
            resultado = false ;
        }else{
            console.log("Ingreso una opcion no valida");
        }
    }
    return resultado;
}
//Funcion que valida entradas===>
export function validarEntrada(entrada: string){
    if (entrada ==''){
        throw new ErrorValidacion('Error, campo vacio');
    }
}

//Funcion que crea un numero aleatoreo===>
export function crearNumRamdom(max :number) {
    return Math.floor(Math.random() * max);   //Math.floor 
}
export function verificarEspecialidad(arregloEspecialidad:Array<Especialidad>, especialidad:string):Array<Especialidad> {
    let resultado = arregloEspecialidad.filter(arregloEspecialidad => especialidad);
    return resultado;
}
//funciones para la clase Especialidad==>
//Funcion que crea un Objeto de tipo Especialidad desde una base de datos(.txt)===>
export function crearEspecialidad(especialidad:string,arregloEspecialidad : Array<Especialidad>) {
    let nuevaEspecialidad: Especialidad = new Especialidad(especialidad);
    arregloEspecialidad.push(nuevaEspecialidad);
    
}
//Funcion que crea un Objeto de tipo Especialidad( de forma manual )===>
export function nuevaEspecialidad(arregloEspecialidad: Array<Especialidad>): Especialidad{
    let especialidad : string = readlineSync.question('Ingrese una nueva Especialidad: ');
    let nuevaEspecialidad : Especialidad = new Especialidad(especialidad);
    arregloEspecialidad.push(nuevaEspecialidad);
    return nuevaEspecialidad;
}
//Funcion que borra un Objeto de tipo Especialidad===>
export function borrarEspecialidad(arregloEspecialidad: Array<Especialidad>,especialidad: string){
    for(let i:number = 0; i<arregloEspecialidad.length; i++){
        if (arregloEspecialidad[i].getNombre() == especialidad){
            arregloEspecialidad.splice(i,1);
        }
    }
}
//Funcion que muestre todas las especialidades===>
export function mostrarEspecialidad(arregloEspecialidad: Array<Especialidad>){
    for(let i:number = 0;i<arregloEspecialidad.length;i++){
        console.log(arregloEspecialidad[i]);
    }
}
//Funcion para buscar una Especialidad en el arreglo de las Especialidades===>
export function buscarEspecialidad(arregloEspecialidad: Array<Especialidad>,especialidadBusca:string){
    for (let i: number = 0; i<arregloEspecialidad.length; i++){
        if(arregloEspecialidad[i].getNombre() == especialidadBusca){
            return console.log(`la Especialidad se encuentra en la base de datos ${arregloEspecialidad[i].getNombre()}`);
        }
    }
}

//funcion que genera un Objeto de tipo Medico desde una base de datos(.txt)==>
export function crearMedico(medico: string, arregloMedico: Array<Medico>,arregloEspecialidad: Array<Especialidad>):Array<Medico> {
    let propiedadMedico: string[] = medico.split(',');
    let nombreMedico : string = propiedadMedico[0];
    let matriculaMedico : number = Number(propiedadMedico[1]); 
    let listaMedico : Array<Medico> = arregloMedico;
    let especialidadMedico: Especialidad = arregloEspecialidad[crearNumRamdom(arregloEspecialidad.length)]; 
    let nuevoMedico: Medico = new Medico(nombreMedico,matriculaMedico,especialidadMedico);
    listaMedico.push(nuevoMedico);
    arregloEspecialidad.push(especialidadMedico);
    return listaMedico;
}
export function validarMatricula(arregloMedico.getMatricula(),matricula:number){
    return matricula == arregloMedico.getMatricula();
}
//ingresamos los datos para crear una instacia de Medico de forma manual==>
export function nuevoMedico(arregloMedico:Array<Medico>, arregloEspecialidad:Array<Especialidad>):Medico  {
    let nombreMedico : string = readlineSync.question('Ingrese el nombre y apellido del Medico:   ');
    let condicion : boolean= true;
    let nuevoMedico: Medico;
    let matriculaMedico : number = readlineSync.questionInt('Ingrese el numero de Matricula:   ');
    let listaMedico : Array<Medico> = arregloMedico;
      while (condicion ==  true) {
            let resultado[] = arregloMedico.filter(validarMatricula);
            if (resultado == true){
                matriculaMedico = readlineSync.questionInt("Matricula incorrecta, vuelva a ingresar la Matricula:   ");
            }else{
                condicion = false; 
            }                     
            
                
        }
    let especialidadMedico: Especialidad = arregloEspecialidad[crearNumRamdom(arregloEspecialidad.length)];   
    nuevoMedico = new Medico(nombreMedico,matriculaMedico,especialidadMedico);
    arregloEspecialidad.push(especialidadMedico);
    listaMedico.push(nuevoMedico); 
    return nuevoMedico;      
}

//Funcion para modificar el Medico, ingresando el numero de Matricula===>
export function modificarMedico(arregloMedico:Array<Medico>, matricula:number) {
    let opcion : string;
    for(let i:number=0; i<arregloMedico.length; i++) {
        if(arregloMedico[i].getMatricula() == matricula){
            let condicion : boolean = true;
            while (condicion == true){                
                opcion = readlineSync.question("Desea cambiar el nombre y apellido del Medico?  SI/NO");
                if ( verificaOpcion(opcion)== true){
                    arregloMedico[i].setNombre(readlineSync.question("Ingrese nuevo nombre y apellido:   ")); 
                }else{
                    opcion = readlineSync.question("Desea cambiar la Especialidad del Medico?  SI/NO");
                    if (verificaOpcion(opcion)== true){
                        arregloMedico[i].setEspecialidad(readlineSync.question("Ingrese nueva Especialidad:   "));
                    }
                } 
            }           
            console.log(`El medico ${arregloMedico[i].getNombre()} a sido modificado`);
        }else{
            console.log("Matricula invalida, vuelva a intentar, gracias");
        }
    }
}
// Funcion para eliminar un Medico===>
export function borrarMedico(arregloMedico: Array<Medico>, matricula:number) {
    for (let i : number =0; i < arregloMedico.length; i++){  
        if (matricula == arregloMedico[i].getMatricula()){
            arregloMedico.splice(i, 1);
            console.log("El medico ha sido eliminado");
        }else{
            console.log("La matricula ingresada no es valida");
        }
    }
}
// Funcion para consultar sobre el Medico===>
export function consultaMedico(arregloMedico: Array<Medico>, matricula: number){
    for (let i : number = 0; i < arregloMedico.length; i++){  
        if (matricula == arregloMedico[i].getMatricula()){
            console.log("");
            return console.log(`El Medico: ${arregloMedico[i].getNombre()}, con Matricula: ${arregloMedico[i].getMatricula()}, tiene la Especialidad de:${arregloMedico[i].getEspecialidad()}`);
        }else{
            console.log("");
            return console.log("La matricula ingresada no es valida");
        }
    }
}
export function consultaMedicoNombre(arregloMedico: Array<Medico>, arregloEspecialidad: Array<Especialidad>,nombreMedico: string): Medico{
    for (let i : number = 0; i < arregloMedico.length; i++){  
        if (nombreMedico == arregloMedico[i].getNombre()){
            console.log("");
            console.log(`El Medico: ${arregloMedico[i].getNombre()}, con Matricula: ${arregloMedico[i].getMatricula()}, tiene la Especialidad de:${arregloMedico[i].getEspecialidad()}`);
            return arregloMedico[i];
        }else{
            console.log("");
            console.log("El Medico que ingresa no existe");
            console.log("");
            let opcion : string = readlineSync.question("Desea hacer el alta del Medico? SI/NO:   ");
            if(verificaOpcion(opcion)== true){
                return nuevoMedico(arregloMedico,arregloEspecialidad);
            }
        }
    }
}
//Funcion que muestre todas los Medicos===>
export function mostrarMedico(arregloMedico: Array<Medico>){
    for(let i:number = 0;i<arregloMedico.length;i++){
        console.log(`El medico ${arregloMedico[i].getNombre()},con Matricula: ${arregloMedico[i].getMatricula()},  su Especialidad es: ${arregloMedico[i].getEspecialidad()}`);
    }
}
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
 export function crearPaciente(paciente: string, arregloPaciente: Array<Paciente>):Array<Paciente> {
    let propiedadPaciente: string[] = paciente.split(',');
    let nombrePaciente: string = propiedadPaciente[0];
    let dniPaciente : number = Number(propiedadPaciente[1]);
    let telefonoPaciente : number = Number(propiedadPaciente[2]);
    let obraSocialPaciente : string = propiedadPaciente[3]; 
    let nuevoPaciente: Paciente = new Paciente(nombrePaciente,dniPaciente,telefonoPaciente,obraSocialPaciente);
    let listaPaciente : Array<Paciente>  = arregloPaciente;
    listaPaciente.push(nuevoPaciente);
    return listaPaciente;
}
//ingresamos los datos para crear una instancia de Paciente==>
 export function nuevoPaciente(arregloPaciente:Array<Paciente>):Paciente {
     let nombrePaciente : string = readlineSync.question('Ingrese nombre del paciente:');
     let dniPaciente : number = readlineSync.question('Ingrese DNI del paciente:');
     let telefonoPaciente : number = readlineSync.question('Ingrese el telefono del paciente:');
     let obraSocialPaciente : string = readlineSync.question('Ingrese la obra sosial del paciente:');
     let nuevoPaciente: Paciente = new Paciente(nombrePaciente,dniPaciente,telefonoPaciente,obraSocialPaciente);
     let listaPaciente : Array<Paciente> = arregloPaciente;
     listaPaciente.push(nuevoPaciente);
     return nuevoPaciente;
}
//Funcion para modificar algun dato del Paciente===>
export function modificarPaciente(arregloPaciente:Array<Paciente>,dniPaciente:number){
    for(let i:number = 0; i < arregloPaciente.length; i++){
        if (dniPaciente == arregloPaciente[i].getDni()){
            arregloPaciente[i].setNombre(readlineSync.question("Ingrese modifcacion de nombre en caso que coresponda: "));
            arregloPaciente[i].setTelefono(readlineSync.questionInt("Ingrese nuevo telefono en caso que corresponda:  "));
            arregloPaciente[i].setObraSocial(readlineSync.question("Ingrese nueva Obra Social en caso que corresponda:  "));
            console.log("Gracias, paciente modificado!!");
        }
    }
}
//Funcion para borrar un Paciente===>
export function borrarPaciente(arregloPaciente:Array<Paciente>,dniPaciente){
    for(let i:number=0; i<arregloPaciente.length; i++){
        if (arregloPaciente[i].getDni() == dniPaciente){
            arregloPaciente.splice(i, 1);
            console.log("El Paciente a sido borrado, gracias!!");
        }
    }
}
//Funcion para mostrar algun dato del Paciente===>
export function buscaPaciente(arregloPaciente:Array<Paciente>,dniPaciente: number){
    for(let i:number = 0; i< arregloPaciente.length; i++){
        if (arregloPaciente[i].getDni()==dniPaciente){
            return arregloPaciente[i];
        }else{
            return console.log("El DNI es invalido, vuelva a probar");
        }
    }
}
//Funcion para mostrar todos los Paciente===>
export function muestraPaciente(arregloPaciente:Array<Paciente>){
    for(let i:number = 0; i< arregloPaciente.length; i++){
        console.log(`El paciente ${arregloPaciente[i].getNombre()} con DNI: ${arregloPaciente[i].getDni()}, telefono: ${arregloPaciente[i].getTelefono()}, tiene como Obra Social : ${arregloPaciente[i].getObraSocial()}`);
    }
}
//Funcion que crea un turno desde 0==>
export function crearTurno(arregloTurno:Array<Turno>,arregloMedico:Array<Medico>,arregloPaciente:Array<Paciente>,arregloEspecialidad:Array<Especialidad>):Turno {
    let num_turno: number = arregloTurno.length + 1;
    let nombreMedico: string = readlineSync.question("Ingrese el nombre y apellido del Medico:   ");
    let medicoNuevo = consultaMedicoNombre(arregloMedico,arregloEspecialidad,nombreMedico);
    let pacienteNuevo = nuevoPaciente(arregloPaciente);
    //ingresamos los datos para crear una instancia de Horario==>
    let fechaTurno: string = readlineSync.question('Ingrese la fecha del turno:');
    let horaTurno : number = readlineSync.questionInt('Ingrese la hora del turno:');
    let nuevoHorario: Horario = new Horario(fechaTurno,horaTurno);
    let nuevoTurno : Turno = new Turno(num_turno,medicoNuevo,pacienteNuevo,nuevoHorario);
    console.log(`ud. tiene el turno n: ${num_turno}, con el Medico: ${medicoNuevo.getNombre()}, paciente: ${pacienteNuevo.getNombre()}, el dia : ${fechaTurno} a la hora: ${nuevoHorario.getHora()}`);
    let listaTurno : Array<Turno> = arregloTurno;
    listaTurno.push(nuevoTurno);
    return nuevoTurno;
}
//Funcion que modifica algun parametro del Turno==>
export function modificarTurno(arregloTurno:Array<Turno>,arregloMedico:Array<Medico>,arregloPaciente:Array<Paciente>,arregloEspecialidad:Array<Especialidad>, num_Turno:number):Array<Turno> {
    for (let i:number = 0; i<arregloTurno.length; i++){
        if (arregloTurno[i].getNumTurno() == num_Turno){
            console.log(`ud. quiere modificar el turno n: ${num_Turno}, con el Medico: ${arregloTurno[i].getMedico()}, paciente: ${arregloTurno[i].getPaciente()}, con horario ${arregloTurno[i].getHorario()}`);
            let opcionTurno: string = readlineSync.question("SI/NO:   ");
            if (verificaOpcion(opcionTurno) == true ){
                arregloTurno[i].setMedico(readlineSync.question("Ingrese el nuevo Medico en caso que corresponda:   "));
                arregloTurno[i].setPaciente(readlineSync.question("Ingrese el nuevo Paciente en caso que corresponda:   "));
                arregloTurno[i].setHorario(readlineSync.question("Ingrese el nuevo Horario en caso que corresponda:   "));
                console.log(`ud. quiere modificar el turno n: ${num_Turno}, con el Medico: ${arregloTurno[i].getMedico()}, paciente: ${arregloTurno[i].getPaciente()}, con horario ${arregloTurno[i].getHorario()}`);
            }else{
                console.log("Gracias!!");
            }
        }else{
            console.log("Ingreso un numero de Turno no valido");
        }
    }
    return arregloTurno;    
}
//Funcion  que muestra los turnos===>
export function muestraTurnos(arregloTurno:Array<Turno>,arregloMedico:Array<Medico>,arregloPaciente:Array<Paciente>,arregloEspecialidad:Array<Especialidad>){
    for (let i:number = 0;i<arregloTurno.length;i++){
        console.log(` el turno n: ${arregloTurno[i].getNumTurno()}, con el Medico: ${arregloTurno[i].getMedico()}, paciente: ${arregloTurno[i].getPaciente()}, el dia : ${arregloTurno[i].getHorario()}`);
    }
}
//Funcion que borra un turno, ingresando su numero===>
export function borrarTurno(arregloTurno:Array<Turno>, numeroTurno:number){
    for (let i: number = 0; i < arregloTurno.length; i++){
        if (numeroTurno == arregloTurno[i].getNumTurno()){
            console.log("El siguiente Turno va a ser dado de baja");
            console.log(` el turno n: ${arregloTurno[i].getNumTurno()}, con el Medico: ${arregloTurno[i].getMedico()}, paciente: ${arregloTurno[i].getPaciente()}, el dia : ${arregloTurno[i].getHorario()}`);
            let opcion : string = readlineSync.question('Confirma la baja?Si/No:   ');
            if (verificaOpcion(opcion) == true){
                arregloTurno.splice(i, 1);
            }else{
                  if (verificaOpcion(opcion) == false){
                      console.log("Vuelva a ingresar el numero de turno");
                  }else{
                      console.log("Ud. ingreso una opcion no valida");
                }
            }
        }else{
            console.log("numero de Turno invalido");
        }          
    }
}