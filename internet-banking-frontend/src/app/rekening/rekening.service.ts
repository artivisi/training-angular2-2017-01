import { Injectable } from '@angular/core';

import { Rekening } from './rekening.model';

@Injectable()
export class RekeningService {

  constructor() { }

  ambilDataRekening(): Promise<Rekening[]> {
    let hasil: Rekening[] = [
      new Rekening("r001", '1234567890', 'Tabungan Endy Muhardin'),
      new Rekening("r002", '0987654321', 'Giro Endy Muhardin')
    ]

    return new Promise(resolve => {
      setTimeout(() => resolve(hasil), 2000);
    });
  }
}
