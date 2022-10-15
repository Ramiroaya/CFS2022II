//Ejercicio 1:
//Con todo lo aprendido hasta el momento optimizar el siguiente codigo,-teniendo presente todo lo hablado sobre buenas practicas- ver que herramientas de las hasta ahora vistas se pueden utilizar (composicion, herencia, polimorfismo, etc).
class Animal{
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public makeSound(): void {
        console.log('sonido animal\n');
      }
}
class Dog extends Animal{
    constructor(name: string) {
        super(name);
    }
    public makeSound(): void {
       console.log ('wuff wuff\n');
    }
}
class Cat extends Animal{
    constructor(name: string) {
       super(name);
    }
    public makeSound(): void {
       console.log('meow meow\n');
    }
}
// Inicio de Programa
let minino: Cat = new Cat('Pocky');
minino.makeSound(); // -> meow meow
let firulais: Dog = new Dog('Pocky');
firulais.makeSound(); // -> wuff wuff


/*
Ejercicio 2:
Responder las siguientes preguntas
Que es un objeto?
    Un "objeto" es una instacia de una clase creado a partir de un contructor.

Que es una clase?
  Es un molde mediante el cual vamos a poder crear objetos o instancias de ella misma, una clase se compone de atributos, metodos y funciones .

A que se llama metodo constructor?
    Es la funcion o metodo propio de una clase mediante el cual nos va a permitir crear esos objetos o instancias, el cual define los atributos propios de la clase.

Que son los modificadores de acceso?
    Mediante los modificadores de acceso vamos a poder administrar el nivel de accesibilidad de los atributos o metodos propios de cada clase y objeto, segun queramos.
    
Que diferencia hay entre uno privado y uno protegido?
    El privado es el modificador mas restrictivo, solo se puede acceder desde la clase en que se encuentra, el modificador protected puede ser accedido unicamente por la clase que lo declara y las posibles clases que la la heredan.

Cuando se usa el this?
    El "this" los usamos cuando queremos hacer referencia al atributo declarado en la clase( traemos al atributo dentro)  dentro de metodos o constructor de la misma.

Cuando se usa el super?
    El "super" se usa cuando hay clases que heredan, se usa dentro del constructor de la clase hija, para hacer referencia al consctructor de la clase padre.

A que se llama sub-clase, o clase hija?
    A una clase que hereda de otra, llamada padre, atributos y/o metodos que puede usar en su misma clase.

Ejercicio 3:
Utilizar lo aprendido y crear una Clase, la cual tenga metodos y atributos, una instancia de dicha clase, y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede.
*/

class Vehiculo{
    protected marca: string;
    protected color: string;
    protected encendido: boolean;
    protected velocidad: number;
    protected ruedas: number;
    protected rpm : number;
    constructor(marca:string, color:string, ruedas:number, rpm:number){
        this.marca = marca;
        this.color = color;
        this.encendido = false;
        this.velocidad = 0;
        this.ruedas = ruedas;
        this.rpm = rpm;
    }
    public encenderVehiculo():void{
        this.encendido = true;
    }
    public aumentoVelocidad():void{
        this.velocidad += 10;
    }
    public getMarca():void{
        this.marca;
    }
    public getColor():void{
        this.color;
    }
    public getEncendido():void{
        this.encendido;
    }
    public getVelocidad():void{
        this.velocidad;
    }
    public getRuedas():void{
        this.ruedas;
    }
    public getRpm(): void{
        this.rpm;
    }
    public aumentoRpm():void{
        this.rpm += 100;
    }
    public sonidoEscape():void{
        console.log("sonido escape normal");
    }
}
class Motocicleta extends Vehiculo{
    constructor(marca: string,color: string,ruedas: number,rpm: number){
        super(marca,color,ruedas,rpm);
    }
    public aumentoVelocidad():void{
        this.velocidad += 50;
    }
    public aumentoRpm():void{
        this.rpm += 1000;
    }
    public sonidoEscape():void{
        console.log("sonido escape fuerte");
    }
}
//inicio programa
let topolino: Vehiculo = new Vehiculo(Fiat,verde,4,4500);
let motoNueva : Motocicleta = new Motocicleta(Honda,azul,2,15000);
console.log(topolino.getRpm());
topolino.aumentoRpm();
topolino.aumentoVelocidad();
console.log(topolino.getRpm());
console.log(topolino.getVelocidad());
console.log(topolino.sonidoEscape());
console.log(motoNueva.getRpm());
console.log(motoNueva.aumentoVelocidad());
motoNueva.aumentoRpm();
motoNueva.aumentoVelocidad();
console.log(motoNueva.getRpm());
console.log(motoNueva.getVelocidad());
console.log(motoNueva.sonidoEscape());



















