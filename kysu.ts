import { CanBo } from "./canbo";

export class KySu extends CanBo{
    private _nganhdaotao : string
    constructor (nganhdaotao : string, hoten:string,ngaysinh:string,diachi:string,gioitinh:string)  {
        super(hoten, ngaysinh,diachi,gioitinh)
        this._nganhdaotao = nganhdaotao
    }

    getNganhDaoTao() {
        return this._nganhdaotao
    }
    setNganhDaoTao (nganhdaotao : string) {
        this._nganhdaotao = nganhdaotao
    }
}