import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../employee/services/employee.service';
import { AlertService } from '../../../services/alert.service';
import { WorkedDay } from '../../models/worked-day';
import { WorkedDaysService } from '../../services/worked-days.service';

@Component({
  selector: 'app-worked-days-form',
  templateUrl: './worked-days-form.component.html',
  styleUrls: ['./worked-days-form.component.css']
})
export class WorkedDaysFormComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;

  private workedDay = new WorkedDay();

  private employees = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private service: WorkedDaysService,
              public alertService: AlertService,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.loadWorkedDay(this.id);
      }
    });
    this.fetchEmployees();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadWorkedDay(id: number) {
    this.service.getDetail(id).subscribe(
      workedDay => this.workedDay = workedDay
    );
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data.results
    );
  }

  saveWorkedDays() {
    this.service.saveWorkedDay(this.workedDay).subscribe(
      () => {
        this.alertService.success('Worked days saved successfully');
        this.router.navigate(['/worked-days/']);
      }
    );
  }
}
