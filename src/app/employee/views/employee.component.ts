import { DataSource } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { MdDialog, MdDialogRef, MdPaginator } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { AlertService } from '../../services/alert.service';

import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { EmployeeDialogTemplateComponent } from './employee-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSource: EmployeeDataSource;
  displayedColumns = ['userId', 'userName', 'progress', 'color', 'actions'];

  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(private service: EmployeeService,
              public dialog: MdDialog,
              private changeDetector: ChangeDetectorRef,
              public alertService: AlertService) {
  }

  ngOnInit() {
    this.paginator.pageIndex = 1;
    this.paginator.pageSize = 10;
    this.paginator.pageSizeOptions = [5, 10, 25, 50];

    this.dataSource = new EmployeeDataSource(this.service, this.paginator);

    this.changeDetector.detectChanges();
  }

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
  }

  private editEmployee(event, employee: Employee) {
    this.openDialog(employee);
  }

  private deleteEmployee(event, employee: Employee) {
    this.service.deleteEmployee(employee)
      .subscribe(
        () => this.paginator.ngOnInit()
      );
  }
}

class EmployeeDataSource extends DataSource<Employee> {
  connect(): Observable<Employee[]> {
    return this.employeeService.getEmployees(this._paginator.pageIndex).map(data => {
      this._paginator.length = data.count;
      return data.results;
    });
  }

  disconnect(): void {
  }

  constructor(private employeeService: EmployeeService, private _paginator: MdPaginator) {
    super();
  }
}
