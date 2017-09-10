import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../models/employee.model';
import { PaginatedList } from '../../models/paginated-list.model';
import { AbstractService } from '../../services/abstract.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeService extends AbstractService<Employee> {
  private endpoint: string;

  constructor(protected http: Http, protected _router: Router) {
    super(http, _router);
    this.endpoint = 'v1/employee/';
  }

  getEmployees(page = 1): Observable<PaginatedList> {
    return this.getList(this.endpoint + '?page=' + page);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.getList(this.endpoint + id);
  }

  createEmployee(employee: Employee) {
    return this.post(this.endpoint, employee);
  }

  updateEmployee(employee: Employee) {
    return this.put(this.endpoint + employee.id, employee);
  }

  deleteEmployee(employee: Employee) {
    return this.delete(this.endpoint + employee.id);
  }
}
