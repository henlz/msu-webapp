import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkedDaysFormComponent } from './worked-days-form.component';

describe('WorkedDaysFormComponent', () => {
  let component: WorkedDaysFormComponent;
  let fixture: ComponentFixture<WorkedDaysFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkedDaysFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkedDaysFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
