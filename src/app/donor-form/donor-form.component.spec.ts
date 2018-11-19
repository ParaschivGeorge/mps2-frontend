import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorFormComponent } from './donor-form.component';

describe('DonorFormComponent', () => {
  let component: DonorFormComponent;
  let fixture: ComponentFixture<DonorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
