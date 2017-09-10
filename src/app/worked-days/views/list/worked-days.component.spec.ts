import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkedDaysComponent } from './worked-days.component';

describe('WorkedDaysComponent', () => {
  let component: WorkedDaysComponent;
  let fixture: ComponentFixture<WorkedDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkedDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkedDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
