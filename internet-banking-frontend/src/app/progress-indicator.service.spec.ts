/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProgressIndicatorServiceService } from './progress-indicator-service.service';

describe('ProgressIndicatorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressIndicatorServiceService]
    });
  });

  it('should ...', inject([ProgressIndicatorServiceService], (service: ProgressIndicatorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
