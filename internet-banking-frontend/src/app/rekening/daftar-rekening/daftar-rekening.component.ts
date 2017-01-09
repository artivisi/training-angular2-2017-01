import { Component, OnInit } from '@angular/core';

import { Rekening } from '../rekening.model';
import { RekeningService } from '../rekening.service';

@Component({
  selector: 'app-daftar-rekening',
  templateUrl: './daftar-rekening.component.html',
  styleUrls: ['./daftar-rekening.component.css']
})
export class DaftarRekeningComponent implements OnInit {

  daftarRekening: Rekening[];

  constructor(private rekeningService: RekeningService) {
    rekeningService.ambilDataRekening()
    .then(hasil => this.daftarRekening = hasil);
  }

  tampilkanDetail(rek: Rekening){
    console.log("Menampilkan info rekening "+rek.nama);
  }

  ngOnInit() {
  }

}
