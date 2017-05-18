import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private http: Http) {
  }

  getAll(page = 1): Observable<Employee[]> {
    return this.http.get('http://localhost:3000/employees?page=' + page, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getById(id: number) {
    return this.http.get('http://localhost:3000/employees/' + id, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  create(employee: Employee) {
    return this.http.post('http://localhost:3000/employees', employee, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  update(employee: Employee) {
    return this.http.put('http://localhost:3000/employees/' + employee.id, employee, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:3000/employees/' + id, this.jwt())
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
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
