

function sumarValores(valores: number[]) : number {
    if(valores.length == 0){
        throw new Error("No se puede sumar un arreglo vacio");
    }

    let sumaTotal: number = 0;

    for (let i :number = 0; i < valores.length; i++){
        sumaTotal += valores[i];

    }

    return sumaTotal;
}

let valores : number[] = [];
let resultado : number;

try {
    resultado = sumarValores(valores);

}catch(err){
    console.log("Ocurrio un error inesperado, volviendo resultado a 0");
    
    resultado = 0;
}

console.log(resultado);