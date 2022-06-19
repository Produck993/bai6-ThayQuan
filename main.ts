import { CanBoQuanLy } from "./canbo-quanly";
import * as rl from "readline-sync"
import { CanBo } from "./canbo";
import { NhanVien } from "./nhanvien";
import { KySu } from "./kysu";
import { CongNhan } from "./congnhan";

let quanLyCanBo : CanBoQuanLy = new CanBoQuanLy();
let choice = -1
do {
    console.log(`1. Hiển thị danh sách`)
    console.log(`2. Thêm nhân sự mới`)
    console.log(`3. Cập nhật thông tin cán bộ`)
    console.log(`4. Xóa`)
    console.log(`5. Tìm theo tên`)
    console.log(`0. Thoát chương trình`)
    choice = +rl.question (`Nhập lựa chọn của bạn : `);
    switch (choice){
        case 1 : 
    {    
                let choice1 = -1
            console.log(`--------Hiển thị danh sách trong bộ máy chính quyền--------`)
            console.log(`1. Hiển thị danh sách cán bộ`)
            console.log(`2. Hiển thị danh sách nhân viên`)
            console.log(`3. Hiển thị danh sách kỹ sư`)
            console.log(`4. Hiển thị danh sách công nhân`)
                choice1 = +rl.question(`Nhập lựa chọn của bạn : `)
                let danhsach = quanLyCanBo.hienThi();

                switch (choice1) 
            {
                case 1 : {
                    console.log(`---------Danh sách cán bộ-----------`) 
                    for ( let i of danhsach ) {
                        if ( i instanceof CanBo) {
                            let canbo = i as CanBo
                            console.table(`Họ tên : ${canbo._hoten} địa chỉ : ${canbo._diachi} giới tinh : ${canbo._gioitinh} ngày sinh : ${canbo._ngaysinh}`)
                        }
                    }
                    break;
                    } 
                    case 2 : 
                    {
                        console.log(`---------Danh sách nhân viên -----------`) 
                        for ( let i of danhsach ) {
                            if ( i instanceof NhanVien) {
                                let nhanvien = i as NhanVien
                                console.table(`Họ tên : ${nhanvien._hoten} địa chỉ : ${nhanvien._diachi} giới tinh : ${nhanvien._gioitinh} ngày sinh : ${nhanvien._ngaysinh} công việc : ${nhanvien.getCongViec()}`)
                            }
                        }
                        break;
                    }
                    case 3 : 
                    {
                        console.log(`---------Danh sách kĩ sư -----------`) 
                        for ( let i of danhsach ) {
                            if ( i instanceof KySu) {
                                let nhanvien = i as KySu
                                console.table(`Họ tên : ${nhanvien._hoten} địa chỉ : ${nhanvien._diachi} giới tinh : ${nhanvien._gioitinh} ngày sinh : ${nhanvien._ngaysinh} Ngành đào tạo : ${nhanvien.getNganhDaoTao()}`)
                            }
                        }
                        break;
                    }
                    case 4 : {
                        console.log(`---------Danh sách công nhân -----------`) 
                        for ( let i of danhsach ) {
                            if ( i instanceof CongNhan) {
                                let nhanvien = i as CongNhan
                                console.table(`Họ tên : ${nhanvien._hoten} địa chỉ : ${nhanvien._diachi} giới tinh : ${nhanvien._gioitinh} ngày sinh : ${nhanvien._ngaysinh} Bậc lao động : ${nhanvien.getBac()}`)
                            }
                        }
                        break;
                    }
            }
            break;
    }
            case 2 : {
                let chocie2 = -1
                console.log(`1. Thêm cán bộ`)
                console.log(`2. Thêm nhân viên`)
                console.log(`3. Thêm kĩ sư`)
                console.log(`4. Thêm Công nhân`)
                chocie2 = +rl.question(`Lựa chọn mục cần thêm :`)
                
               switch(chocie2) {
                    case 1 : {
                console.log(`------------Thêm cán bộ mới--------------`)
                let themTen = rl.question(`Nhập tên : `)
                let themNgaysinh = rl.question(`Nhập ngày sinh : `)
                let themGioiTinh = rl.question(`Nhập giới tính : `)
                let themDiaChi = rl.question(`Nhập địa chỉ : `)
                let canbo = new CanBo(themTen, themNgaysinh, themDiaChi, themGioiTinh)
                let hiendanhsach = quanLyCanBo.themCanBo(canbo)
                console.log(hiendanhsach)
                break;
                    }
                    case 2 : {
                        console.log(`------------Thêm nhân viên mới--------------`)
                        let themTen = rl.question(`Nhập tên : `)
                        let themNgaysinh = rl.question(`Nhập ngày sinh : `)
                        let themGioiTinh = rl.question(`Nhập giới tính : `)
                        let themDiaChi = rl.question(`Nhập địa chỉ : `)
                        let themCongViec = rl.question(`Nhập công việc : `)
                        let nhanvien = new NhanVien(themCongViec,themTen,themNgaysinh,themDiaChi,themGioiTinh)
                        let hiendanhsach = quanLyCanBo.themCanBo(nhanvien)
                        console.log(hiendanhsach)
                        break;
                    }
                    case 3 : {
                        console.log(`------------Thêm Kĩ Sư mới--------------`)
                        let themTen = rl.question(`Nhập tên : `)
                        let themNgaysinh = rl.question(`Nhập ngày sinh : `)
                        let themGioiTinh = rl.question(`Nhập giới tính : `)
                        let themDiaChi = rl.question(`Nhập địa chỉ : `)
                        let themNganhDaoTao = rl.question(`Nhập ngành đào tạo : `)
                        let kisu = new KySu(themNganhDaoTao,themTen,themNgaysinh,themDiaChi,themGioiTinh)
                        let hiendanhsach = quanLyCanBo.themCanBo(kisu)
                        console.log(hiendanhsach)
                        break;
                    }
                    case 4 : {
                        console.log(`------------Thêm công nhân mới--------------`)
                        let themTen = rl.question(`Nhập tên : `)
                        let themNgaysinh = rl.question(`Nhập ngày sinh : `)
                        let themGioiTinh = rl.question(`Nhập giới tính : `)
                        let themDiaChi = rl.question(`Nhập địa chỉ : `)
                        let themBac = +rl.question(`Nhập bậc : `)
                        let congnhan = new CongNhan(themBac,themTen,themNgaysinh,themDiaChi,themGioiTinh)
                        let hiendanhsach = quanLyCanBo.themCanBo(congnhan)
                        console.log(hiendanhsach)
                        break;
                    }


                }
                break;
            }

            case 3 : {
                let timTen = rl.question(`Nhập tên cán bộ cần sửa : `)
                let suaTen = rl.question(`Nhập tên cần sửa: `)
                let suaNgaySinh = rl.question(`Nhập ngày sinh : `)
                let suaGioiTinh = rl.question(`Nhập giới tính : `)
                let suaDiaChi = rl.question(`Nhập địa chỉ : `)         
                let canBoMoi = new CanBo (suaTen,suaNgaySinh,suaGioiTinh,suaDiaChi)
                let hienThi = quanLyCanBo.suaTheoTen(timTen,canBoMoi)
                console.log(hienThi)
                break;
            }
            case 4 : {
                console.log(`------------Xóa tên cần xóa--------------`)
                let timTen = rl.question(`Nhập tên cán bộ cần sửa : `)
                let hienthi = quanLyCanBo.xoaTheoTen(timTen)
                console.log(hienthi)
                break;
            }

            case 5 : {
                let timTen = rl.question(`Tìm tên cần hiển thị : `)
                let hienthi = quanLyCanBo.findName(timTen)
                console.log(hienthi)
             
            }
        
    }
             

} while ( choice != 0)
