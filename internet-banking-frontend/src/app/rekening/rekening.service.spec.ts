/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RekeningService } from './rekening.service';

describe('RekeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RekeningService]
    });
  });

  it('should ...', inject([RekeningService], (service: RekeningService) => {
    expect(service).toBeTruthy();
  }));
});
