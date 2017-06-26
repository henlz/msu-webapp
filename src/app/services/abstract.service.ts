import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AbstractService<T> {
  protected apiUrl: string;

  constructor(protected http: Http, protected router: Router) {
    this.apiUrl = 'https://msu-api-zago.herokuapp.com/';
  }

  protected getList(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  protected get(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  protected post(url: string, params: any) {
    return this.http.post(this.apiUrl + url, params, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  protected put(url: string, params: any) {
    return this.http.put(this.apiUrl + url, params, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  protected delete(url: string) {
    return this.http.delete(this.apiUrl + url, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  // Helper methods

  protected jwt() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const token = JSON.parse(currentUser).auth_token;
      const headers = new Headers({'Authorization': token});
      return new RequestOptions({headers: headers});
    }
  }

  protected handleError(error: Response | any) {
    if (error.status === 401) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }

    return Observable.throw(error.json());
  }
}
