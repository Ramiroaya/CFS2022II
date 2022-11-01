import Telefono from './Telefono';

class TelefonoConCamara extends Telefono{
    private camara: number;

    constructor(camara: number){
        super();
        this.camara = camara;
    }
    public sacarFotos(): void{
        console.log("Sacando Fotos...");
    }
}