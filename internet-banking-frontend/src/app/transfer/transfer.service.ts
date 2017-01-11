import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Transfer } from './transfer.model';

@Injectable()
export class TransferService {

    private serverUrl = 'api/transfer/';

  constructor(private httpClient : Http) { }

  simpan(t : Transfer) : Promise<void> {
      return this.httpClient.post(this.serverUrl, t)
      .toPromise()
      .then(() => { console.log("Sukses menyimpan data"); })
      .catch(error => console.log("Error : "+error));
  }

}
