
export default class Telefono{
    private estaPrendido: boolean;
    private bateriaActual: number;

    constructor(){
        this.estaPrendido = false;
        this.bateriaActual = 70;
    }
    public mandarMensaje():void{
        console.log("Mandando Mensaje...");
    }
    public hacerLlamada(): void{
        console.log("Haciendo la Llamada...");
    }
    public prenderTelefono(): void{
        this.estaPrendido = true;
    }
    public apagarTelefono(): void{
        this.estaPrendido = false;
    }
}