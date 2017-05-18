import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  password: string;
  returnUrl: string;

  login() {
    this.service.login(this.user.email, this.password)
      .subscribe(
        data => this.router.navigate([this.returnUrl || 'employee']),
        error => this.alertService.error('Login failed')
      );
  }

  constructor(public service: AuthenticationService,
              public router: Router,
              public alertService: AlertService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    });
  }
}
