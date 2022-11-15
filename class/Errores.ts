export default class ErrorValidacion extends Error{
    public constructor(message: string){
        super(message);
        this.name = "Error Validacion";
    }
}