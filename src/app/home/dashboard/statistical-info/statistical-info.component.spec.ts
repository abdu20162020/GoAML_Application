import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalInfoComponent } from './statistical-info.component';

describe('StatisticalInfoComponent', () => {
  let component: StatisticalInfoComponent;
  let fixture: ComponentFixture<StatisticalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
