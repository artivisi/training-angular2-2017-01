import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Rekening } from '../rekening.model';
import { RekeningService } from '../rekening.service';

@Component({
  selector: 'pilihan-rekening',
  templateUrl: './pilihan-rekening.component.html',
  styleUrls: ['./pilihan-rekening.component.css']
})
export class PilihanRekeningComponent implements OnInit {

  daftarRekening : Rekening[];
  @Output() pilihan = new EventEmitter<Rekening>();

  constructor(private rekeningService : RekeningService) {
      rekeningService.ambilDataRekening()
      .then(hasil => this.daftarRekening = hasil)
      .catch(this.handleError);
  }

  private handleError(errors: any): void {
      console.log("Terjadi error : "+errors);
  }

  pilih(r : Rekening){
      console.log("Rekening dipilih : "+r.nama);
      this.pilihan.emit(r);
  }

  ngOnInit() {
  }

}
