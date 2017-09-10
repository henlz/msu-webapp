import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AbstractService } from '../../../services/abstract.service';

@Injectable()
export class AuthenticationService extends AbstractService<{}> {
  constructor(protected http: Http, private _router: Router) {
    super(http, _router);
  }

  logout(): boolean {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    return true;
  }

  login(username: string, password: string) {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    return this.post('login/', body)
      .catch((error: Response | any) => {
        return Observable.throw(error);
      });
  }
}
