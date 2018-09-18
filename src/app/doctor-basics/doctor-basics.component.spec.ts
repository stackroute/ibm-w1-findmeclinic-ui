import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBasicsComponent } from './doctor-basics.component';

describe('DoctorBasicsComponent', () => {
  let component: DoctorBasicsComponent;
  let fixture: ComponentFixture<DoctorBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
