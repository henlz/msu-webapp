import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AbstractService } from './abstract.service';

@Injectable()
export class AuthenticationService extends AbstractService<{}> {
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  login(email: string, password: string) {
    return this.post('authenticate', {email, password})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user && user.auth_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }
}
