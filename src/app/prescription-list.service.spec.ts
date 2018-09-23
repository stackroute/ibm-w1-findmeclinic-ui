import { TestBed, inject } from '@angular/core/testing';

import { PrescriptionListService } from './prescription-list.service';

describe('PrescriptionListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrescriptionListService]
    });
  });

  it('should be created', inject([PrescriptionListService], (service: PrescriptionListService) => {
    expect(service).toBeTruthy();
  }));
});
