"use strict";
exports.__esModule = true;
var Turno = /** @class */ (function () {
    function Turno(num_turno, medico, paciente, horario) {
        this.num_turno = num_turno;
        this.medico = medico;
        this.paciente = paciente;
        this.horario = horario;
    }
    Turno.prototype.getNumTurno = function () {
        return this.num_turno;
    };
    Turno.prototype.getMedico = function () {
        return this.medico;
    };
    Turno.prototype.getPaciente = function () {
        return this.paciente;
    };
    Turno.prototype.getHorario = function () {
        return this.horario;
    };
    Turno.prototype.setTurno = function (turno) {
        this.num_turno = turno;
    };
    Turno.prototype.setMedico = function (nuevoMedico) {
        this.medico = nuevoMedico;
    };
    Turno.prototype.setPaciente = function (nuevoPaciente) {
        this.paciente = nuevoPaciente;
    };
    Turno.prototype.setHorario = function (nuevoHorario) {
        this.horario = nuevoHorario;
    };
    return Turno;
}());
exports["default"] = Turno;
