export class CanBo{
    _hoten : string
    _ngaysinh : string
    _gioitinh : string
    _diachi : string
    constructor(hoten : string, ngaysinh : string, diachi : string, gioitinh : string) {
        this._hoten = hoten
        this._ngaysinh = ngaysinh
        this._diachi = diachi
        this._gioitinh = gioitinh
    }

    getHoten() {
        return this._hoten
    }
    setHoten(hoten : string) {
        this._hoten = hoten
    }

    getNgaySinh() {
        return this._ngaysinh
    }
    setNgaySinh(ngaysinh: string) {
        this._ngaysinh = ngaysinh
    }

    getGioiTinh(){
        return this._gioitinh
    }
    setGioiTinh(gioitinh: string) {
        this._gioitinh = gioitinh
    }

    getDiaChi() {
        return this._diachi
    }
    setDiaChi(diachi: string) {
        this._diachi = diachi
    }
}