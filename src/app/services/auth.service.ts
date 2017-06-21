import { Injectable } from '@angular/core';
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
      .map((response) => {
        const user = response;

        if (user && user.auth_token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }
}
