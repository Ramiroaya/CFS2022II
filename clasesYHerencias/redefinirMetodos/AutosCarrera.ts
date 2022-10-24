import Auto from './Autos';

export default class AutosDeCarreras extends Auto {
    private potencia:number;
    
    constructor(potencia:number,marca: string,color: string,cilindrada:number){
        super(marca,color,cilindrada);
        this.potencia = potencia;
    }
    public getPotencia():void{
        this.potencia;
    }
    public aumentarVelocidad(): void {
        this.velocidad += 50;
    }
    public reducirVeloc():void{
        this.velocidad -= 50;
    }
}