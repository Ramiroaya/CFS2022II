abstract class Auto{
    ruedas : number;
    puertas  : number;
    velocidad  : number;
    encendido : boolean;

    public constructor(ruedas: number,puertas: number){
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.velocidad = 0;
        this.encendido = false;   
   }
    public getRuedas(): number{
        return this.ruedas;
}
    public getPuertas(): number{
        return this.puertas;
    }
    public getVelocidad(): number{
        return this.velocidad;
    }
    public getEncendido(): boolean{
        return this.encendido;
    }
    abstract consumoCombustible(): void
    abstract cargarCombustible(): void
}

class AutoCiudad extends Auto {
    private combustible : number;

    public constructor(ruedas: number, puertas: number){
        super(ruedas,puertas);
        this.combustible = 0;
    }
    public getRuedas(): number{
        return this.ruedas;
    }
    public getPuertas(): number{
        return this.puertas;
    }
    public getVelocidad(): number{
        return this.velocidad;
    }
    public getEncendido(): boolean{
        return this.encendido;
    }
    public getCombustible(): number{
        return this.combustible;
    }
    public aumentarVelocidad(): void{
        this.velocidad += 20;
    }
    public reducirVelocidad():void{
        this.velocidad -= 20;
    }
    public encederAuto(): void{
        this.encendido = true;
    }
    public cargarCombustible(): void{
        this.combustible += 10;
    }
    public consumoCombustible(): void{
        this.combustible -= 10;
    }

}
class AutoDeportivo extends Auto{
    private combustible : number;

    public constructor(ruedas: number,puertas: number){
        super(ruedas,puertas);
        this.combustible = 0;
    }
    public getRuedas(): number{
        return this.ruedas;
    }
    public getPuertas(): number{
        return this.puertas;
    }
    public getVelocidad(): number{
        return this.velocidad;
    }
    public getEncendido(): boolean{
        return this.encendido;
    }
    public getCombustible(): number{
        return this.combustible;
    }
    public aumentarVelocidad(): void{
        this.velocidad += 50;
    }
    public reducirVelocidad():void{
        this.velocidad -= 50;
    }
    public encederAuto(): void{
        this.encendido = true;
    }
    public cargarCombustible(): void{
        this.combustible += 40;
    }
    public consumoCombustible(): void{
        this.combustible -= 40;
    }

}
class Camioneta extends Auto{
    private combustible : number;
    private cargaUtil: number;

    public constructor(ruedas: number,puertas: number,carga: number){
        super(ruedas,puertas);
        this.combustible = 0;
        this.cargaUtil = carga;
    }
    public getRuedas(): number{
        return this.ruedas;
    }
    public getPuertas(): number{
        return this.puertas;
    }
    public getVelocidad(): number{
        return this.velocidad;
    }
    public getEncendido(): boolean{
        return this.encendido;
    }
    public getCombustible(): number{
        return this.combustible;
    }
    public getCarga(): number{
        return this.cargaUtil;
    }
    public aumentarVelocidad(): void{
        this.velocidad += 10;
    }
    public reducirVelocidad():void{
        this.velocidad -= 10;
    }
    public encederAuto(): void{
        this.encendido = true;
    }
    public cargarCombustible(): void{
        this.combustible += 30;
    }
    public consumoCombustible(): void{
        this.combustible -= 30;
    }

}
let pickpup :Camioneta = new Camioneta(4,3,2500);
let saveiro : Camioneta = new Camioneta(4,2,850);
let fiatUno :AutoCiudad = new AutoCiudad(4,2);
let bugatti : AutoDeportivo = new AutoDeportivo(4,2);
pickpup.encederAuto();
saveiro.encederAuto();
fiatUno.cargarCombustible();
fiatUno.aumentarVelocidad();
console.log(pickpup.getCarga());
console.log(pickpup.getVelocidad());
