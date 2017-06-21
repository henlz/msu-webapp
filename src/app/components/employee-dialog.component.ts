import { Component, OnInit } from '@angular/core';

import { MdDialogRef } from '@angular/material';
import { Employee } from '../models/employee.model';

import { AlertService } from '../services/alert.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html'
})
export class EmployeeDialogTemplateComponent implements OnInit {
  title: string;
  employee: Employee;
  errors: any;

  onEmployeeSaved() {
    console.log('saved');
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

  handleError(errors: any) {
    console.log('error', errors);
    this.errors = errors;
  }

  ngOnInit() {
    if (!this.employee) {
      this.title = 'New Employee';
      this.employee = new Employee();
    } else {
      this.title = 'Edit Employee';
    }
  }

  constructor(public dialogRef: MdDialogRef<EmployeeDialogTemplateComponent>,
              public alertService: AlertService,
              private service: EmployeeService) {
    this.errors = {};
  }
}
