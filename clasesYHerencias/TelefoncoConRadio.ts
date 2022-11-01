import Telefono from './Telefono';

class TelefoncoConRadio extends Telefono {
    private frecuenciaActual:number;

    constructor(frecuenciaActual:number){
        super();
        this.frecuenciaActual = frecuenciaActual;
    }
    public verFrecuenciaActual():void {
        console.log(this.frecuenciaActual);
    }
}