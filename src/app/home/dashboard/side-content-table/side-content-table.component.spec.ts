import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContentTableComponent } from './side-content-table.component';

describe('SideContentTableComponent', () => {
  let component: SideContentTableComponent;
  let fixture: ComponentFixture<SideContentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideContentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideContentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
