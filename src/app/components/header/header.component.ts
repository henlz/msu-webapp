import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from '../../modules/login/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  links = [
    {label: 'Employee', ref: '/employee'}
  ];

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  constructor(public authService: AuthenticationService, public router: Router) {
  }
}
