export default class Auto{
    protected marca: string;
    protected color: string;
    protected velocidad: number;
    protected cilindrada:number;
    protected encendido: boolean;

    constructor(marca:string, color:string, cilindrada:number) {
        this.marca = marca;
        this.color = color;
        this.velocidad = 0;
        this.cilindrada= cilindrada;
        this.encendido = false;
    }

    public getMarca():void{
        this.marca;
    }
    public getColor():void{
        this.color;
    }
    public getVelocidad():void{
        this.velocidad;
    }
    public getCilindrada():void{
        this.cilindrada;
    }
    public aumentarVelocidad():void{
        this.velocidad = this.velocidad += 10;
    }
    public reducirVeloc():void{
        this.velocidad = this.velocidad -= 10;
    }
    public encenderAuto():void{
        this.encendido = true;
    }
}