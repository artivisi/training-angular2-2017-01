import { Rekening } from '../rekening/rekening.model';

export class Transfer {
    constructor(public rekeningSumber: Rekening, public rekeningTujuan : Rekening, public nilai : number, public berita : string) {

    }
}
