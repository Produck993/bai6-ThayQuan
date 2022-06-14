import { CanBo } from "./canbo";

export class NhanVien extends CanBo {
    private _congviec : string
    constructor (congviec : string,hoten:string,ngaysinh:string,diachi:string,gioitinh:string) {
        super(hoten, ngaysinh,diachi,gioitinh)
        this._congviec = congviec
    }

    getCongViec() {
        return this._congviec
    }
    setCongViec(congviec : string) {
        this._congviec = congviec
    }
}
