"use strict";
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
exports.__esModule = true;
exports.NhanVien = void 0;
var canbo_1 = require("./canbo");
var NhanVien = /** @class */ (function (_super) {
    __extends(NhanVien, _super);
    function NhanVien(congviec, hoten, ngaysinh, diachi, gioitinh) {
        var _this = _super.call(this, hoten, ngaysinh, diachi, gioitinh) || this;
        _this._congviec = congviec;
        return _this;
    }
    NhanVien.prototype.getCongViec = function () {
        return this._congviec;
    };
    NhanVien.prototype.setCongViec = function (congviec) {
        this._congviec = congviec;
    };
    return NhanVien;
}(canbo_1.CanBo));
exports.NhanVien = NhanVien;
