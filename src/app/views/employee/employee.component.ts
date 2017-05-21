import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';

import { Observable } from 'rx';
import { EmployeeDialogTemplateComponent } from '../../components/employee-dialog.component';

import { Employee } from '../../models/employee.model';
import { AlertService } from '../../services/alert.service';
import { EmployeeService } from '../../services/employee.service';
import { Pagination } from '../../models/pagination.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  pagination = new Pagination<Employee>();

  openDialog(employee) {
    const dialogRef: MdDialogRef<EmployeeDialogTemplateComponent> = this.dialog.open(EmployeeDialogTemplateComponent);

    dialogRef
      .afterClosed()
      .subscribe(
        result => {
          if (result) {
            this.onEmployeeSaved();
          }
        }
      );

    dialogRef.componentInstance.employee = employee ? new Employee(employee) : new Employee();
  }

  private onEmployeeSaved() {
    this.alertService.success('Employee saved!');
    this.loadEmployees();
  }

  private editEmployee(event, employee: Employee) {
    this.openDialog(employee);
  }

  private deleteEmployee(event, employee: Employee) {
    this.service.delete(employee.id)
      .subscribe(
        () => {
          this.alertService.success(`Employee ${employee.name} deleted with sucess!`);
          this.loadEmployees();
        }
      );
  }

  loadEmployees(page = 1) {
    this.service.getAll(page)
      .subscribe(
        data => this.pagination = data
      );
  }

  ngOnInit() {
    this.loadEmployees();
  }

  constructor(private service: EmployeeService,
              public dialog: MdDialog,
              public alertService: AlertService) {
  }
}
