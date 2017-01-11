import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProgressIndicatorService {

  private status = new Subject<any>();

  getStatus() : Observable<any> {
    return this.status.asObservable();
  }

  toggleIndicator(data : any){
    this.status.next(data);
  }

  constructor() { }

}
