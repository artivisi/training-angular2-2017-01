import { Component, OnInit } from '@angular/core';

import { Rekening } from '../rekening.model';
import { RekeningService } from '../rekening.service';

@Component({
  selector: 'pilihan-rekening',
  templateUrl: './pilihan-rekening.component.html',
  styleUrls: ['./pilihan-rekening.component.css']
})
export class PilihanRekeningComponent implements OnInit {

  daftarRekening : Rekening[];

  constructor(private rekeningService : RekeningService) {
      rekeningService.ambilDataRekening()
      .then(hasil => this.daftarRekening = hasil)
      .catch(this.handleError);
  }

  private handleError(errors: any): void {
      console.log("Terjadi error : "+errors);
  }

  ngOnInit() {
  }

}
