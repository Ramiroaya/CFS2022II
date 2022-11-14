var AutoCarrera = /** @class */ (function () {
    function AutoCarrera(ruedas, motor, chasis) {
        this.velocidad = 0;
        this.ruedas = ruedas;
        this.encendido = false;
        this.motor = motor;
        this.chasis = chasis;
        this.combustible = 0;
    }
    AutoCarrera.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    AutoCarrera.prototype.getRuedas = function () {
        return this.ruedas;
    };
    AutoCarrera.prototype.getEncendido = function () {
        return this.encendido;
    };
    AutoCarrera.prototype.aumentarVeloc = function () {
        this.velocidad += 50;
    };
    AutoCarrera.prototype.reducirVeloc = function () {
        this.velocidad += 50;
    };
    AutoCarrera.prototype.consumoCombustible = function () {
        this.combustible -= 20;
    };
    AutoCarrera.prototype.getCombustible = function () {
        return this.combustible;
    };
    AutoCarrera.prototype.carcarCombusible = function () {
        this.combustible += 50;
    };
    AutoCarrera.prototype.encenderAuto = function () {
        this.encendido = true;
    };
    return AutoCarrera;
}());
var AutoFamiliar = /** @class */ (function () {
    function AutoFamiliar(ruedas, puertas) {
        this.velocidad = 0;
        this.ruedas = ruedas;
        this.encendido = false;
        this.puertas = puertas;
        this.radio = false;
        this.combustible = 0;
    }
    AutoFamiliar.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    AutoFamiliar.prototype.getRuedas = function () {
        return this.ruedas;
    };
    AutoFamiliar.prototype.getEncendido = function () {
        return this.encendido;
    };
    AutoFamiliar.prototype.aumentarVeloc = function () {
        this.velocidad += 20;
    };
    AutoFamiliar.prototype.reducirVeloc = function () {
        this.velocidad += 20;
    };
    AutoFamiliar.prototype.prenderRadio = function () {
        this.radio = true;
    };
    AutoFamiliar.prototype.encenderAuto = function () {
        this.encendido = true;
    };
    AutoFamiliar.prototype.aumentarVolumen = function () {
        console.log("subiendo volumen radio");
    };
    AutoFamiliar.prototype.bajarVolumen = function () {
        console.log("bajando volumen radio");
    };
    AutoFamiliar.prototype.consumoCombustible = function () {
        this.combustible -= 5;
    };
    AutoFamiliar.prototype.getCombustible = function () {
        return this.combustible;
    };
    AutoFamiliar.prototype.carcarCombusible = function () {
        this.combustible += 10;
    };
    return AutoFamiliar;
}());
var mustang = new AutoCarrera(4, 6, "Ford");
var macLaren = new AutoCarrera(4, 12, "MacLaren");
var van = new AutoFamiliar(4, 5);
var corsaWagon = new AutoFamiliar(4, 5);
console.log(mustang.getVelocidad());
mustang.encenderAuto;
mustang.aumentarVeloc();
mustang.carcarCombusible();
console.log(mustang.getCombustible());
console.log(mustang.getVelocidad());
