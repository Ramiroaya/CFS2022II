import * as fs from 'fs';
import * as readFileSync from 'readline-sync';
import * as readlineSync from 'readline-sync';

// clase para leer archivos..
class LectorArchivos{
    private arregloString: string[];
    constructor(txtFileLocation: string) {
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
    }
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }
    public getArregloString(): string[] {
        return this.arregloString;
    }
}

class RegistroAutomotor{
    private marca : string;
    private motorNum: number;
    private chasisNum: number;
    private dominio: string;
    private titular: string;
    
    constructor(marca: string, motorNum: number, chasisNum: number, dominio:string, titular:string){
        this.marca = marca;
        this.motorNum = motorNum;
        this.chasisNum = chasisNum;
        this.dominio = dominio;
        this.titular = titular;
    }
    public getMarca(){
        return this.marca;
    }
    public getMotorNum(){
        return this.motorNum;
    }
    public getChasisNum(){
        return this.chasisNum;
    }
    public getDominio(){
        return this.dominio;
    }
    public getTitular(){
        return this.titular;
    }
}

//funcion para crear un nuevo auto
function crearAuto(auto: string, arrayAutos: Array<RegistroAutomotor>): void {
    //transformo el elemento de tipo string en un objeto de tipo Auto

    let propiedadAuto: string[] = auto.split(','); 
    let marca: string = propiedadAuto[0];
    let motorNum: number = Number(propiedadAuto[1]);
    let chasisNum: number = Number(propiedadAuto[2]);
    let dominio: string = propiedadAuto[3];
    let titular: string = propiedadAuto[4];
    let listaAuto: Array<RegistroAutomotor> = arrayAutos;
    let nuevoAuto : RegistroAutomotor = new RegistroAutomotor(marca,motorNum,chasisNum,dominio,titular);

    //inserto el elemento de tipo Auto en el arreglo recibido
    arrayAutos.push(nuevoAuto);
}


    function borrarAuto(arregloAuto: Array<RegistroAutomotor>,  position: number): void{    ​
        delete arregloAuto[position];        
        
    }
    function modificarAuto(arregloAuto: Array<RegistroAutomotor>,  position: number): void {
        //editar un auto en el arreglo
         let marca: string = readlineSync.question("Ingrese la Marca : ");
         let motorNum: number = Number(readlineSync.question("Ingrese el numero de Motor : "));
         let chasisNum: number = Number(readlineSync.question("Ingrese el numero de Chasis : "));
         let dominio: string = readlineSync.question("Ingrese el dominio: ");
         let titular: string = readlineSync.question("Ingrese el titular: ");
         let listaAutos: Array<RegistroAutomotor> = arregloAuto;
    ​    arregloAuto[position] = new RegistroAutomotor(marca,motorNum,chasisNum,dominio,titular);
    }
    function nuevoAuto(arregloAuto: Array<RegistroAutomotor>): void {
        //crear auto nuevo
        let marca: string = readlineSync.question("Ingrese la Marca : ");
        let motorNum: number = Number(readlineSync.question("Ingrese el numero de Motor : "));
        let chasisNum: number = Number(readlineSync.question("Ingrese el numero de Chasis : "));
        let dominio: string = readlineSync.question("Ingrese el dominio: ");
        let titular: string = readlineSync.question("Ingrese el titular: ");
        let listaAutos: Array<RegistroAutomotor> = arregloAuto;
    ​    let nuevoAuto: RegistroAutomotor = new RegistroAutomotor(marca,motorNum,chasisNum,dominio,titular);
        listaAutos.push(nuevoAuto);
    }
//Inicio de programa

let datosAutos: LectorArchivos = new LectorArchivos('autos.txt');
let arrayAutos: Array<RegistroAutomotor> = [];
let condicion :boolean = true;


for (let i: number = 0; i < datosAutos.getArregloString().length; i++) {
      //Creo Autos uno por uno leyendo el txt        
        crearAuto(datosAutos.getArregloString()[i], arrayAutos);
}  
console.log("Opciones a ingresar : 1-Ver Autos, 2-Agregar Autos, 3-Modificar Autos, 4-Borrar Autos");
let opcion = readlineSync.question("Ingrese la opcion deseada: ");
while(condicion == true) {
    if(opcion >=1 && opcion <=5){
            if(opcion == 1){
                console.log(arrayAutos);
            }else{
                if(opcion == 2){
                    nuevoAuto(arrayAutos);
                }else{
                    if(opcion==3){
                        let position = readlineSync.question("Ingrese la posicion a modificar: ");
                        modificarAuto(arrayAutos,position);
                    }else{
                        if(opcion==4){
                            let position = readlineSync.question("Ingrese la posicion a borrar: ");
                            borrarAuto(arrayAutos,position);
                        }else{
                            condicion = false;
                        }
                    }
                }
            }
    }else{
        console.log("Error, ud. no carga un valor valido del menu, por favor vuelva a intentarlo, gracias!!");
    }
    opcion = readlineSync.question("Desea hacer otra consulta, si/no: ");
    if (opcion =="si"){
        console.log("Opciones a ingresar : 1-Ver Autos, 2-Agregar Autos, 3-Modificar Autos, 4-Borrar Autos");
        opcion = readlineSync.question("Ingrese la opcion deseada: ");
    }else{
        console.log("Gracias por su consulta!!");
        condicion = false;
    }
}    