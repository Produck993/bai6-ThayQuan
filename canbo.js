"use strict";
exports.__esModule = true;
exports.CanBo = void 0;
var CanBo = /** @class */ (function () {
    function CanBo(hoten, ngaysinh, diachi, gioitinh) {
        this._hoten = hoten;
        this._ngaysinh = ngaysinh;
        this._diachi = diachi;
        this._gioitinh = gioitinh;
    }
    CanBo.prototype.getHoten = function () {
        return this._hoten;
    };
    CanBo.prototype.setHoten = function (hoten) {
        this._hoten = hoten;
    };
    CanBo.prototype.getNgaySinh = function () {
        return this._ngaysinh;
    };
    CanBo.prototype.setNgaySinh = function (ngaysinh) {
        this._ngaysinh = ngaysinh;
    };
    CanBo.prototype.getGioiTinh = function () {
        return this._gioitinh;
    };
    CanBo.prototype.setGioiTinh = function (gioitinh) {
        this._gioitinh = gioitinh;
    };
    CanBo.prototype.getDiaChi = function () {
        return this._diachi;
    };
    CanBo.prototype.setDiaChi = function (diachi) {
        this._diachi = diachi;
    };
    return CanBo;
}());
exports.CanBo = CanBo;
