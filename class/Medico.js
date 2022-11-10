"use strict";
exports.__esModule = true;
var Medico = /** @class */ (function () {
    function Medico(nombre, matricula, especialidad) {
        this.nombre = nombre,
            this.matricula = matricula;
        this.especialidad = especialidad;
    }
    Medico.prototype.getNombre = function () {
        return this.nombre;
    };
    Medico.prototype.getMatricula = function () {
        return this.matricula;
    };
    Medico.prototype.getEspecialidad = function () {
        return this.especialidad;
    };
    Medico.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Medico.prototype.setEspecialidad = function (nuevaEspecialidad) {
        this.especialidad = nuevaEspecialidad;
    };
    return Medico;
}());
exports["default"] = Medico;
