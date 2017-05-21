import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../models/employee.model';
import { Pagination } from '../models/pagination.model';

@Injectable()
export class EmployeeService {
  apiUrl = 'https://msu-api-zago.herokuapp.com/';

  constructor(private http: Http) {
  }

  getAll(page = 1): Observable<Pagination<Employee>> {
    return this.http.get(this.apiUrl + 'employees?page=' + page, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getById(id: number) {
    return this.http.get(this.apiUrl + 'employees/' + id, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  create(employee: Employee) {
    return this.http.post(this.apiUrl + 'employees', employee, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  update(employee: Employee) {
    const data = Object.assign({}, employee);
    delete data.id;
    return this.http.put(this.apiUrl + 'employees/' + employee.id, data, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + 'employees/' + id, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const token = JSON.parse(currentUser).auth_token;
      const headers = new Headers({'Authorization': token});
      return new RequestOptions({headers: headers});
    }
  }

  private handleError (error: Response | any) {
    return Observable.throw(error.json());
  }
}
