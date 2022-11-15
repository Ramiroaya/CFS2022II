import Especialidad from "./Especialidad";

export default class Medico {
    private nombre : string;
    private matricula: number;
    private especialidad : Especialidad;

    public constructor(nombre : string, matricula: number, especialidad: Especialidad) {
        this.nombre = nombre,
        this.matricula = matricula;
        this.especialidad = especialidad;
    }
    public getNombre() : string {
        return this.nombre;
    }
    public getMatricula() : number {
        return this.matricula;
    }    
    public getEspecialidad() : Especialidad {
        return this.especialidad;
    }
    public setNombre(nuevoNombre: string ) : void {
        this.nombre = nuevoNombre;
    }
    public setEspecialidad(nuevaEspecialidad:Especialidad ) : void {
        this.especialidad = nuevaEspecialidad;
    }
    /*public borrarEspecialidad(especialidad: Especialidad) : void {
        delete this.especialidad;
    }*/


}