import { Component, OnInit } from '@angular/core';

import { MdDialogRef } from '@angular/material';
import { Employee } from '../models/employee.model';

import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html'
})
export class EmployeeDialogTemplateComponent implements OnInit {
  title = 'Employee';
  employee: Employee;

  validateForm() {
    if (!this.employee.name) {
      this.alertService.error('The name field is required');
      return false;
    }

    if (!this.employee.role) {
      this.alertService.error('The name field is required');
      return false;
    }

    return true;
  }

  onSave() {
    if (this.validateForm()) {
      this.dialogRef.close(this.employee);
    }
  }

  ngOnInit() {
    if (!this.employee) {
      this.employee = new Employee();
    }
  }

  constructor(public dialogRef: MdDialogRef<EmployeeDialogTemplateComponent>, public alertService: AlertService) {
  }
}
