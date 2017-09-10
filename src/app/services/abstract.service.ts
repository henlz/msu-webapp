import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AbstractService<T> {
  protected apiUrl: string;

  constructor(protected http: Http, protected router: Router) {
    // this.apiUrl = 'https://msu-django.herokuapp.com/v1/';
    this.apiUrl = 'http://localhost:8000/';
  }

  protected getList(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url, this.getRequestOptions())
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  protected get(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url, this.getRequestOptions())
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  protected post(url: string, params: any, requestOptions?: RequestOptions) {
    return this.http.post(this.apiUrl + url, params, this.getRequestOptions())
      .map(this.handleSuccess.bind(this))
      .catch(this.handleError.bind(this));
  }

  protected put(url: string, params: any) {
    return this.http.put(this.apiUrl + url, params, this.getRequestOptions())
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  protected delete(url: string) {
    return this.http.delete(this.apiUrl + url, this.getRequestOptions())
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  // Helper methods

  protected getRequestOptions() {
    return new RequestOptions({
      withCredentials: true
    });
  }

  protected handleSuccess(response: Response) {
    return response ? response.json() : null;
  }

  protected handleError(error: Response | any) {
    if (error.status === 403) {
      this.router.navigate(['/login']);
    }

    return Observable.throw(error.json());
  }
}
