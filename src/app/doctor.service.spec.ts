import { TestBed, inject } from '@angular/core/testing';

import { DoctorAuthService } from './doctor.service';

describe('DoctorAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorAuthService]
    });
  });

  it('should be created', inject([DoctorAuthService], (service: DoctorAuthService) => {
    expect(service).toBeTruthy();
  }));
});
