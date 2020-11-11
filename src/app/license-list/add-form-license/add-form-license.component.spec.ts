import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormLicenseComponent } from './add-form-license.component';

describe('AddFormLicenseComponent', () => {
  let component: AddFormLicenseComponent;
  let fixture: ComponentFixture<AddFormLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
