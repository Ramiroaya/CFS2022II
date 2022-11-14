var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(ruedas, puertas) {
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.velocidad = 0;
        this.encendido = false;
    }
    Auto.prototype.getRuedas = function () {
        return this.ruedas;
    };
    Auto.prototype.getPuertas = function () {
        return this.puertas;
    };
    Auto.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Auto.prototype.getEncendido = function () {
        return this.encendido;
    };
    return Auto;
}());
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad(ruedas, puertas) {
        var _this = _super.call(this, ruedas, puertas) || this;
        _this.combustible = 0;
        return _this;
    }
    AutoCiudad.prototype.getRuedas = function () {
        return this.ruedas;
    };
    AutoCiudad.prototype.getPuertas = function () {
        return this.puertas;
    };
    AutoCiudad.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    AutoCiudad.prototype.getEncendido = function () {
        return this.encendido;
    };
    AutoCiudad.prototype.getCombustible = function () {
        return this.combustible;
    };
    AutoCiudad.prototype.aumentarVelocidad = function () {
        this.velocidad += 20;
    };
    AutoCiudad.prototype.reducirVelocidad = function () {
        this.velocidad -= 20;
    };
    AutoCiudad.prototype.encederAuto = function () {
        this.encendido = true;
    };
    AutoCiudad.prototype.cargarCombustible = function () {
        this.combustible += 10;
    };
    AutoCiudad.prototype.consumoCombustible = function () {
        this.combustible -= 10;
    };
    return AutoCiudad;
}(Auto));
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(ruedas, puertas) {
        var _this = _super.call(this, ruedas, puertas) || this;
        _this.combustible = 0;
        return _this;
    }
    AutoDeportivo.prototype.getRuedas = function () {
        return this.ruedas;
    };
    AutoDeportivo.prototype.getPuertas = function () {
        return this.puertas;
    };
    AutoDeportivo.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    AutoDeportivo.prototype.getEncendido = function () {
        return this.encendido;
    };
    AutoDeportivo.prototype.getCombustible = function () {
        return this.combustible;
    };
    AutoDeportivo.prototype.aumentarVelocidad = function () {
        this.velocidad += 50;
    };
    AutoDeportivo.prototype.reducirVelocidad = function () {
        this.velocidad -= 50;
    };
    AutoDeportivo.prototype.encederAuto = function () {
        this.encendido = true;
    };
    AutoDeportivo.prototype.cargarCombustible = function () {
        this.combustible += 40;
    };
    AutoDeportivo.prototype.consumoCombustible = function () {
        this.combustible -= 40;
    };
    return AutoDeportivo;
}(Auto));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(ruedas, puertas, carga) {
        var _this = _super.call(this, ruedas, puertas) || this;
        _this.combustible = 0;
        _this.cargaUtil = carga;
        return _this;
    }
    Camioneta.prototype.getRuedas = function () {
        return this.ruedas;
    };
    Camioneta.prototype.getPuertas = function () {
        return this.puertas;
    };
    Camioneta.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Camioneta.prototype.getEncendido = function () {
        return this.encendido;
    };
    Camioneta.prototype.getCombustible = function () {
        return this.combustible;
    };
    Camioneta.prototype.getCarga = function () {
        return this.cargaUtil;
    };
    Camioneta.prototype.aumentarVelocidad = function () {
        this.velocidad += 10;
    };
    Camioneta.prototype.reducirVelocidad = function () {
        this.velocidad -= 10;
    };
    Camioneta.prototype.encederAuto = function () {
        this.encendido = true;
    };
    Camioneta.prototype.cargarCombustible = function () {
        this.combustible += 30;
    };
    Camioneta.prototype.consumoCombustible = function () {
        this.combustible -= 30;
    };
    return Camioneta;
}(Auto));
var pickpup = new Camioneta(4, 3, 2500);
var saveiro = new Camioneta(4, 2, 850);
var fiatUno = new AutoCiudad(4, 2);
var bugatti = new AutoDeportivo(4, 2);
pickpup.encederAuto();
saveiro.encederAuto();
fiatUno.cargarCombustible();
fiatUno.aumentarVelocidad();
console.log(pickpup.getCarga());
console.log(pickpup.getVelocidad());
