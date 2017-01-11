import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Rekening } from './rekening.model';
import { AuthService } from '../auth.service';

@Injectable()
export class RekeningService {

  private serverUrl = 'api/rekening/';

  constructor(private httpClient: Http, private authService : AuthService) { }

  ambilDataRekening(): Promise<Rekening[]> {
    let headers = new Headers();
    headers.append("Authorization", "Bearer "+this.authService.getCurrentUser().token);

    return this.httpClient.get(this.serverUrl, {headers: headers})
    .toPromise()
    .then(hasil => hasil.json() as Rekening[])
    .catch(this.handleError);
  }

  private handleError(error: any) : Promise<any> {
      //console.error(error.message || error);
      return Promise.reject(error.message || error);
  }
}
