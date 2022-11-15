"use strict";
exports.__esModule = true;
var Especialidad = /** @class */ (function () {
    function Especialidad(nombre_especialidad) {
        this.nombre_especialidad = nombre_especialidad;
    }
    Especialidad.prototype.getNombre = function () {
        return this.nombre_especialidad;
    };
    Especialidad.prototype.setNombre = function (especialidad) {
        this.nombre_especialidad = especialidad;
    };
    return Especialidad;
}());
exports["default"] = Especialidad;
