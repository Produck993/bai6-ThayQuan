import { CanBo } from "./canbo"


class CongNhan extends CanBo{
    private _bac : number
    constructor(bac: number, hoten:string,ngaysinh:string,diachi:string,gioitinh:string) {
        super(hoten, ngaysinh,diachi,gioitinh)
        this._bac = bac
    }

    getBac() {
        return this._bac
    }
    setBac(bac : number){
        this._bac = bac
    }
}