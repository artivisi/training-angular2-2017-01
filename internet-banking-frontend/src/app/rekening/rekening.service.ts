import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Rekening } from './rekening.model';

@Injectable()
export class RekeningService {

  private serverUrl = 'api/rekening/';

  constructor(private httpClient: Http) { }

  ambilDataRekening(): Promise<Rekening[]> {
    return this.httpClient.get(this.serverUrl)
    .toPromise()
    .then(hasil => hasil.json() as Rekening[])
    .catch(this.handleError);
  }

  private handleError(error: any) : Promise<any> {
      //console.error(error.message || error);
      return Promise.reject(error.message || error);
  }
}
