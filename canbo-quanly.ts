import { CanBo } from "./canbo";


export class CanBoQuanLy {
    private static canbodanhsach : CanBo[] = []

    themCanBo(add : CanBo):void {
         CanBoQuanLy.canbodanhsach.push(add)
    }

    hienThi() : CanBo[] {
        return CanBoQuanLy.canbodanhsach
    }

    suaTheoTen(ten : string, newCanbo : CanBo ) : boolean {
        let index = -1
        for (let i = 0; i < CanBoQuanLy.canbodanhsach.length; i ++ ) {
            if ( ten === CanBoQuanLy.canbodanhsach[i]._hoten) {
                index = i
                break
            }
        }
        if ( index != -1) {
            CanBoQuanLy.canbodanhsach[index] = newCanbo
            return true
        } return false    
    }

    xoaTheoTen(ten : string) {
        let index = -1
        for (let i = 0; i < CanBoQuanLy.canbodanhsach.length; i ++ ) {
            if ( ten === CanBoQuanLy.canbodanhsach[i]._hoten) {
                index = i
                break
            }
    }
    if ( index != -1) {
        CanBoQuanLy.canbodanhsach.splice(index,1)
        return true
    } return false    
}


}