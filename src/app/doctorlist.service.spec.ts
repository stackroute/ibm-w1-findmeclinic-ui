import { TestBed, inject } from '@angular/core/testing';

import { DoctorlistService } from './doctorlist.service';

describe('DoctorlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorlistService]
    });
  });

  it('should be created', inject([DoctorlistService], (service: DoctorlistService) => {
    expect(service).toBeTruthy();
  }));
});
