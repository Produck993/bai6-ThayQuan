"use strict";
exports.__esModule = true;
exports.CanBoQuanLy = void 0;
var CanBoQuanLy = /** @class */ (function () {
    function CanBoQuanLy() {
    }
    CanBoQuanLy.prototype.themCanBo = function (add) {
        CanBoQuanLy.canbodanhsach.push(add);
    };
    CanBoQuanLy.prototype.hienThi = function () {
        return CanBoQuanLy.canbodanhsach;
    };
    CanBoQuanLy.prototype.suaTheoTen = function (ten, newCanbo) {
        var index = -1;
        for (var i = 0; i < CanBoQuanLy.canbodanhsach.length; i++) {
            if (ten === CanBoQuanLy.canbodanhsach[i]._hoten) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            CanBoQuanLy.canbodanhsach[index] = newCanbo;
            return true;
        }
        return false;
    };
    CanBoQuanLy.prototype.xoaTheoTen = function (ten) {
        var index = -1;
        for (var i = 0; i < CanBoQuanLy.canbodanhsach.length; i++) {
            if (ten === CanBoQuanLy.canbodanhsach[i]._hoten) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            CanBoQuanLy.canbodanhsach.splice(index, 1);
            return true;
        }
        return false;
    };
    CanBoQuanLy.prototype.findName = function (ten) {
        var index = -1;
        for (var i = 0; i < CanBoQuanLy.canbodanhsach.length; i++) {
            if (ten === CanBoQuanLy.canbodanhsach[i]._hoten) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            return CanBoQuanLy.canbodanhsach;
        }
    };
    CanBoQuanLy.canbodanhsach = [];
    return CanBoQuanLy;
}());
exports.CanBoQuanLy = CanBoQuanLy;
