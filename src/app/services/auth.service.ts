import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AbstractService } from './abstract.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService extends AbstractService<{}> {
  constructor(protected http: Http, private _router: Router) {
    super(http, _router);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  login(email: string, password: string) {
    return this.post('authenticate', {email, password})
      .map(response => {
        const user = response;

        if (user && user.auth_token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      })
      .catch((error: Response | any) => {
        this.logout();
        return Observable.throw(error.json());
      });
  }
}
