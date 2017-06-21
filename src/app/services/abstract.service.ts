import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AbstractService<T> {
  protected apiUrl: string;

  constructor(protected http: Http) {
    this.apiUrl = 'https://msu-api-zago.herokuapp.com/';
  }

  protected getList(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  protected get(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  protected post(url: string, params: any) {
    return this.http.post(this.apiUrl + url, params, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  protected put(url: string, params: any) {
    return this.http.put(this.apiUrl + url, params, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  protected delete(url: string) {
    return this.http.delete(this.apiUrl + url, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  // helper methods

  protected jwt() {
    // createEmployee authorization header with jwt token
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const token = JSON.parse(currentUser).auth_token;
      const headers = new Headers({'Authorization': token});
      return new RequestOptions({headers: headers});
    }
  }

  protected handleError(error: Response | any) {
    return Observable.throw(error.json());
  }
}
