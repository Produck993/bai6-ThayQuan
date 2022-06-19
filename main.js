"use strict";
exports.__esModule = true;
var canbo_quanly_1 = require("./canbo-quanly");
var rl = require("readline-sync");
var canbo_1 = require("./canbo");
var nhanvien_1 = require("./nhanvien");
var kysu_1 = require("./kysu");
var congnhan_1 = require("./congnhan");
var quanLyCanBo = new canbo_quanly_1.CanBoQuanLy();
var choice = -1;
do {
    console.log("1. Hi\u1EC3n th\u1ECB danh s\u00E1ch");
    console.log("2. Th\u00EAm nh\u00E2n s\u1EF1 m\u1EDBi");
    console.log("3. C\u1EADp nh\u1EADt th\u00F4ng tin c\u00E1n b\u1ED9");
    console.log("4. X\u00F3a");
    console.log("5. T\u00ECm theo t\u00EAn");
    console.log("0. Tho\u00E1t ch\u01B0\u01A1ng tr\u00ECnh");
    choice = +rl.question("Nh\u1EADp l\u1EF1a ch\u1ECDn c\u1EE7a b\u1EA1n : ");
    switch (choice) {
        case 1:
            {
                var choice1 = -1;
                console.log("--------Hi\u1EC3n th\u1ECB danh s\u00E1ch trong b\u1ED9 m\u00E1y ch\u00EDnh quy\u1EC1n--------");
                console.log("1. Hi\u1EC3n th\u1ECB danh s\u00E1ch c\u00E1n b\u1ED9");
                console.log("2. Hi\u1EC3n th\u1ECB danh s\u00E1ch nh\u00E2n vi\u00EAn");
                console.log("3. Hi\u1EC3n th\u1ECB danh s\u00E1ch k\u1EF9 s\u01B0");
                console.log("4. Hi\u1EC3n th\u1ECB danh s\u00E1ch c\u00F4ng nh\u00E2n");
                choice1 = +rl.question("Nh\u1EADp l\u1EF1a ch\u1ECDn c\u1EE7a b\u1EA1n : ");
                var danhsach = quanLyCanBo.hienThi();
                switch (choice1) {
                    case 1: {
                        console.log("---------Danh s\u00E1ch c\u00E1n b\u1ED9-----------");
                        for (var _i = 0, danhsach_1 = danhsach; _i < danhsach_1.length; _i++) {
                            var i = danhsach_1[_i];
                            if (i instanceof canbo_1.CanBo) {
                                var canbo = i;
                                console.table("H\u1ECD t\u00EAn : ".concat(canbo._hoten, " \u0111\u1ECBa ch\u1EC9 : ").concat(canbo._diachi, " gi\u1EDBi tinh : ").concat(canbo._gioitinh, " ng\u00E0y sinh : ").concat(canbo._ngaysinh));
                            }
                        }
                        break;
                    }
                    case 2:
                        {
                            console.log("---------Danh s\u00E1ch nh\u00E2n vi\u00EAn -----------");
                            for (var _a = 0, danhsach_2 = danhsach; _a < danhsach_2.length; _a++) {
                                var i = danhsach_2[_a];
                                if (i instanceof nhanvien_1.NhanVien) {
                                    var nhanvien = i;
                                    console.table("H\u1ECD t\u00EAn : ".concat(nhanvien._hoten, " \u0111\u1ECBa ch\u1EC9 : ").concat(nhanvien._diachi, " gi\u1EDBi tinh : ").concat(nhanvien._gioitinh, " ng\u00E0y sinh : ").concat(nhanvien._ngaysinh, " c\u00F4ng vi\u1EC7c : ").concat(nhanvien.getCongViec()));
                                }
                            }
                            break;
                        }
                    case 3:
                        {
                            console.log("---------Danh s\u00E1ch k\u0129 s\u01B0 -----------");
                            for (var _b = 0, danhsach_3 = danhsach; _b < danhsach_3.length; _b++) {
                                var i = danhsach_3[_b];
                                if (i instanceof kysu_1.KySu) {
                                    var nhanvien = i;
                                    console.table("H\u1ECD t\u00EAn : ".concat(nhanvien._hoten, " \u0111\u1ECBa ch\u1EC9 : ").concat(nhanvien._diachi, " gi\u1EDBi tinh : ").concat(nhanvien._gioitinh, " ng\u00E0y sinh : ").concat(nhanvien._ngaysinh, " Ng\u00E0nh \u0111\u00E0o t\u1EA1o : ").concat(nhanvien.getNganhDaoTao()));
                                }
                            }
                            break;
                        }
                    case 4: {
                        console.log("---------Danh s\u00E1ch c\u00F4ng nh\u00E2n -----------");
                        for (var _c = 0, danhsach_4 = danhsach; _c < danhsach_4.length; _c++) {
                            var i = danhsach_4[_c];
                            if (i instanceof congnhan_1.CongNhan) {
                                var nhanvien = i;
                                console.table("H\u1ECD t\u00EAn : ".concat(nhanvien._hoten, " \u0111\u1ECBa ch\u1EC9 : ").concat(nhanvien._diachi, " gi\u1EDBi tinh : ").concat(nhanvien._gioitinh, " ng\u00E0y sinh : ").concat(nhanvien._ngaysinh, " B\u1EADc lao \u0111\u1ED9ng : ").concat(nhanvien.getBac()));
                            }
                        }
                        break;
                    }
                }
                break;
            }
        case 2: {
            var chocie2 = -1;
            console.log("1. Th\u00EAm c\u00E1n b\u1ED9");
            console.log("2. Th\u00EAm nh\u00E2n vi\u00EAn");
            console.log("3. Th\u00EAm k\u0129 s\u01B0");
            console.log("4. Th\u00EAm C\u00F4ng nh\u00E2n");
            chocie2 = +rl.question("L\u1EF1a ch\u1ECDn m\u1EE5c c\u1EA7n th\u00EAm :");
            switch (chocie2) {
                case 1: {
                    console.log("------------Th\u00EAm c\u00E1n b\u1ED9 m\u1EDBi--------------");
                    var themTen = rl.question("Nh\u1EADp t\u00EAn : ");
                    var themNgaysinh = rl.question("Nh\u1EADp ng\u00E0y sinh : ");
                    var themGioiTinh = rl.question("Nh\u1EADp gi\u1EDBi t\u00EDnh : ");
                    var themDiaChi = rl.question("Nh\u1EADp \u0111\u1ECBa ch\u1EC9 : ");
                    var canbo = new canbo_1.CanBo(themTen, themNgaysinh, themDiaChi, themGioiTinh);
                    var hiendanhsach = quanLyCanBo.themCanBo(canbo);
                    console.log(hiendanhsach);
                    break;
                }
                case 2: {
                    console.log("------------Th\u00EAm nh\u00E2n vi\u00EAn m\u1EDBi--------------");
                    var themTen = rl.question("Nh\u1EADp t\u00EAn : ");
                    var themNgaysinh = rl.question("Nh\u1EADp ng\u00E0y sinh : ");
                    var themGioiTinh = rl.question("Nh\u1EADp gi\u1EDBi t\u00EDnh : ");
                    var themDiaChi = rl.question("Nh\u1EADp \u0111\u1ECBa ch\u1EC9 : ");
                    var themCongViec = rl.question("Nh\u1EADp c\u00F4ng vi\u1EC7c : ");
                    var nhanvien = new nhanvien_1.NhanVien(themCongViec, themTen, themNgaysinh, themDiaChi, themGioiTinh);
                    var hiendanhsach = quanLyCanBo.themCanBo(nhanvien);
                    console.log(hiendanhsach);
                    break;
                }
                case 3: {
                    console.log("------------Th\u00EAm K\u0129 S\u01B0 m\u1EDBi--------------");
                    var themTen = rl.question("Nh\u1EADp t\u00EAn : ");
                    var themNgaysinh = rl.question("Nh\u1EADp ng\u00E0y sinh : ");
                    var themGioiTinh = rl.question("Nh\u1EADp gi\u1EDBi t\u00EDnh : ");
                    var themDiaChi = rl.question("Nh\u1EADp \u0111\u1ECBa ch\u1EC9 : ");
                    var themNganhDaoTao = rl.question("Nh\u1EADp ng\u00E0nh \u0111\u00E0o t\u1EA1o : ");
                    var kisu = new kysu_1.KySu(themNganhDaoTao, themTen, themNgaysinh, themDiaChi, themGioiTinh);
                    var hiendanhsach = quanLyCanBo.themCanBo(kisu);
                    console.log(hiendanhsach);
                    break;
                }
                case 4: {
                    console.log("------------Th\u00EAm c\u00F4ng nh\u00E2n m\u1EDBi--------------");
                    var themTen = rl.question("Nh\u1EADp t\u00EAn : ");
                    var themNgaysinh = rl.question("Nh\u1EADp ng\u00E0y sinh : ");
                    var themGioiTinh = rl.question("Nh\u1EADp gi\u1EDBi t\u00EDnh : ");
                    var themDiaChi = rl.question("Nh\u1EADp \u0111\u1ECBa ch\u1EC9 : ");
                    var themBac = +rl.question("Nh\u1EADp b\u1EADc : ");
                    var congnhan = new congnhan_1.CongNhan(themBac, themTen, themNgaysinh, themDiaChi, themGioiTinh);
                    var hiendanhsach = quanLyCanBo.themCanBo(congnhan);
                    console.log(hiendanhsach);
                    break;
                }
            }
            break;
        }
        case 3: {
            var timTen = rl.question("Nh\u1EADp t\u00EAn c\u00E1n b\u1ED9 c\u1EA7n s\u1EEDa : ");
            var suaTen = rl.question("Nh\u1EADp t\u00EAn c\u1EA7n s\u1EEDa: ");
            var suaNgaySinh = rl.question("Nh\u1EADp ng\u00E0y sinh : ");
            var suaGioiTinh = rl.question("Nh\u1EADp gi\u1EDBi t\u00EDnh : ");
            var suaDiaChi = rl.question("Nh\u1EADp \u0111\u1ECBa ch\u1EC9 : ");
            var canBoMoi = new canbo_1.CanBo(suaTen, suaNgaySinh, suaGioiTinh, suaDiaChi);
            var hienThi = quanLyCanBo.suaTheoTen(timTen, canBoMoi);
            console.log(hienThi);
            break;
        }
        case 4: {
            console.log("------------X\u00F3a t\u00EAn c\u1EA7n x\u00F3a--------------");
            var timTen = rl.question("Nh\u1EADp t\u00EAn c\u00E1n b\u1ED9 c\u1EA7n s\u1EEDa : ");
            var hienthi = quanLyCanBo.xoaTheoTen(timTen);
            console.log(hienthi);
            break;
        }
        case 5: {
            var timTen = rl.question("T\u00ECm t\u00EAn c\u1EA7n hi\u1EC3n th\u1ECB");
            var hienthi = quanLyCanBo.findName(timTen);
            console.log(hienthi);
        }
    }
} while (choice != 0);
