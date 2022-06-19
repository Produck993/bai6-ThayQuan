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
exports.CongNhan = void 0;
var canbo_1 = require("./canbo");
var CongNhan = /** @class */ (function (_super) {
    __extends(CongNhan, _super);
    function CongNhan(bac, hoten, ngaysinh, diachi, gioitinh) {
        var _this = _super.call(this, hoten, ngaysinh, diachi, gioitinh) || this;
        _this._bac = bac;
        return _this;
    }
    CongNhan.prototype.getBac = function () {
        return this._bac;
    };
    CongNhan.prototype.setBac = function (bac) {
        this._bac = bac;
    };
    return CongNhan;
}(canbo_1.CanBo));
exports.CongNhan = CongNhan;
