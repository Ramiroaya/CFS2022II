interface Auto{
    velocidad : number;
    ruedas: number;
    encendido: boolean;

    getVelocidad(): number;
    getRuedas(): number;
    getEncendido(): boolean;
    aumentarVeloc(): void;
    reducirVeloc(): void;
    consumoCombustible(): void;
}

class AutoCarrera implements Auto{
    public velocidad : number;
    public ruedas: number;
    public encendido: boolean;
    private motor: number;
    private chasis: string;
    private combustible: number;
    
    public constructor(ruedas: number,motor: number,chasis: string) {
        this.velocidad = 0;
        this.ruedas = ruedas;
        this.encendido = false;
        this.motor = motor;
        this.chasis = chasis;
        this.combustible = 0;
    }

    public getVelocidad():number{
        return this.velocidad;
    }
    public getRuedas():number{
        return this.ruedas;
    }
    public getEncendido():boolean{
        return this.encendido;
    }    
    public aumentarVeloc():void{
        this.velocidad += 50;
    }
    public reducirVeloc():void{
        this.velocidad += 50;
    }
    public consumoCombustible():void{
        this.combustible -= 20;
    }
    public getCombustible():number{
        return this.combustible;
    }
    public carcarCombusible():void{
        this.combustible += 50;
    }
    public encenderAuto():void{
        this.encendido = true;
    }
}
class AutoFamiliar implements Auto{
    public velocidad : number;
    public ruedas: number;
    public encendido: boolean;
    private puertas : number;
    private radio : boolean;
    private combustible : number;

    public constructor(ruedas: number,puertas: number){
        this.velocidad = 0;
        this.ruedas = ruedas;
        this.encendido = false;
        this.puertas = puertas;
        this.radio = false;
        this.combustible = 0;
    }
    public getVelocidad():number{
        return this.velocidad;
    }
    public getRuedas():number{
        return this.ruedas;
    }
    public getEncendido():boolean{
        return this.encendido;
    }    
    public aumentarVeloc():void{
        this.velocidad += 20;
    }
    public reducirVeloc():void{
        this.velocidad += 20;
    }
    public prenderRadio():void{
        this.radio = true;
    }
    public encenderAuto():void{
        this.encendido = true;
    }
    public aumentarVolumen(){
        console.log("subiendo volumen radio");
    }
    public bajarVolumen(){
        console.log("bajando volumen radio");
    }
    public consumoCombustible():void{
        this.combustible -= 5;
    }
    public getCombustible():number{
        return this.combustible;
    }
    public carcarCombusible():void{
        this.combustible += 10;
    }
    
}
let mustang : AutoCarrera = new AutoCarrera(4,6,"Ford");
let macLaren : AutoCarrera = new AutoCarrera(4,12,"MacLaren");
let van : AutoFamiliar = new AutoFamiliar(4,5);
let corsaWagon : AutoFamiliar = new AutoFamiliar(4,5);
console.log(mustang.getVelocidad());
mustang.encenderAuto;
mustang.aumentarVeloc();
mustang.carcarCombusible();
console.log(mustang.getCombustible());
console.log(mustang.getVelocidad()); 

