import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
import { EmployeeComponent } from './views/employee/employee.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  {path: 'login', children: [
    {path: '', component: LoginComponent}
  ]},

  // Main routes
  { path: '', canActivate: [AuthGuard], children: [
    {path: 'employee', component: EmployeeComponent},
    {path: '', component: HeaderComponent, outlet: 'header'}
  ]},

  // otherwise redirect to home
  {path: '**', redirectTo: 'employee'},
];

export const routing = RouterModule.forRoot(appRoutes);
