import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';
import { EmployeeDialogTemplateComponent } from './employee-dialog.component';

import { Employee } from '../models/employee.model';
import { PaginatedList } from '../../../models/paginated-list.model';
import { AlertService } from '../../../services/alert.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  paginatedList = new PaginatedList();

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
    this.service.deleteEmployee(employee)
      .subscribe(
        () => {
          this.alertService.success(`Employee ${employee.name} deleted with sucess!`);
          this.loadEmployees();
        }
      );
  }

  loadEmployees(page = 1) {
    this.service.getEmployees(page)
      .subscribe(
        data => this.paginatedList = data
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
