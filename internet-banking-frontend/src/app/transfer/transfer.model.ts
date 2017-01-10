import { Rekening } from '../rekening/rekening.model';

export class Transfer {
    constructor(public sumber: Rekening, public tujuan : Rekening, public nilai : number, public berita : string) {

    }
}
