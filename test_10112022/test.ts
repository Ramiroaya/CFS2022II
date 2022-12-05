interface Distribuidora{
    nombre: string;
    idSucursal : number;
    direccion: string;
    abierto : boolean;
    
    getNombre():string;
    getIdSucursal():number;
    getDireccion():string;
    getAbierto():boolean;
}

abstract class Producto{
    nombre: string;
    precio : number;
    constructor(nombre:string, precio:number){
        this.nombre = nombre;
        this.precio = precio;
    }

    abstract getNombre():string;        
    
    abstract getPrecio():number;

    
}
class Supermercado implements Distribuidora{
     nombre: string;
     idSucursal : number;
     direccion: string;
     abierto : boolean;
    private productos : Array<SubProducto>;

    public constructor(nombre:string,idSucursal: number,direccion:string,productos:Array<SubProducto>){
        this.nombre = nombre;
        this.idSucursal = idSucursal;
        this.direccion = direccion;
        this.abierto = false;
        this.productos = productos;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public getIdSucursal():number{
        return this.idSucursal;
    }
    public getDireccion():string{
        return this.direccion;
    }
    public getAbierto():boolean{
        return this.abierto;
    }
    public getProductos():Array<SubProducto>{
        return this.productos;
    }
    public abrirLocal():void{
        this.abierto = true;
    }
}

class SubProducto extends Producto{
    private codigo:number;
    private vencimiento : string;
    constructor(nombre:string, precio : number,codigo:number, vencimiento: string){
        super(nombre,precio);
        this.codigo = codigo;
        this.vencimiento = vencimiento;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getPrecio():number{
        return this.precio;
    }
    public getCodigo():number{
        return this.codigo;
    }
    public getVencimiento():void{
        console.log(`el vencimiento del producto es:  ${this.vencimiento}`);
    }
    public aumentarPrecio():void{
        this.precio += 50;
    }
}
let lecheSachet : SubProducto =new SubProducto("La Serenisima",220,1212,'20/20/2022');
let arbejas : SubProducto = new SubProducto("Arcor",150,5050,'28/12/2022');
let galletitasSurtido: SubProducto = new SubProducto("Surtido Terrabusi",250,8989,'10/01/2023');
let arregloProductos: Array<SubProducto> =[];
arregloProductos.push(lecheSachet);
arregloProductos.push(arbejas);
let mercadoCentral : Supermercado = new Supermercado("MercadoCentral",15,"Moreno 2525",arregloProductos);
