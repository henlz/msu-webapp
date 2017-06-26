import { Component, OnInit } from '@angular/core';

import { MdDialogRef } from '@angular/material';
import { Employee } from '../models/employee.model';
import { Location } from '../models/location.model';
import { EmployeeService } from '../services/employee.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html'
})
export class EmployeeDialogTemplateComponent implements OnInit {
  title: string;
  employee: Employee;
  locations: Array<Location>;
  errors: any;

  onEmployeeSaved() {
    this.dialogRef.close(this.employee);
  }

  saveEmployee(employee: Employee) {
    if (!employee.id) {
      this.service.createEmployee(employee)
        .subscribe(
          () => this.onEmployeeSaved(),
          this.handleError
        );
    } else {
      this.service.updateEmployee(employee)
        .subscribe(
          () => this.onEmployeeSaved(),
          this.handleError
        );
    }
  }

  fetchEmployee(employee: Employee) {
    this.service.getEmployee(employee.id)
      .subscribe(
        data => this.employee = data
      );
  }

  handleError(errors: any) {
    this.errors = errors;
  }

  ngOnInit() {
    if (!this.employee) {
      this.title = 'New Employee';
      this.employee = new Employee();
    } else {
      this.title = 'Edit Employee';
      this.fetchEmployee(this.employee);
    }

    this.locationService.getLocations()
      .subscribe(
        data => this.locations = data
      );
  }

  constructor(public dialogRef: MdDialogRef<EmployeeDialogTemplateComponent>,
              public locationService: LocationService,
              private service: EmployeeService) {
    this.errors = {};
  }
}
