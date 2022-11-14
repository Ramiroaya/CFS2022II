
class ErrorValidacion extends Error {

    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ErrorValidacion";
    }
}


let json = `{ "name": "Jhon", "age": 30}`;

function leerUsuario(json: string) { 

    let user = JSON.parse(json); // convierte al string en formato objeto javascript

    if (!user.age) {
        throw new ErrorValidacion("Campo age VACIO"); 
    }
    if (!user.name) {
        throw new ErrorValidacion("Campo name VACIO");
    }

  
    return user;
}

try {
    let usuario = leerUsuario(json);
    console.log(usuario);
}
catch(err){
//    if(err instanceof ErrorValidacion){
//     console.log("Dato Invalido: " + err.message);
//    } 
   console.log(err)
}