import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './modules/login/services/auth.guard';
import { EmployeeComponent } from './modules/employee/views/employee.component';
import { WorkedDaysComponent } from './modules/worked-days/views/worked-days.component';
import { LoginComponent } from './modules/login/views/login.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  {path: 'login', children: [
    {path: '', component: LoginComponent}
  ]},

  // Main routes
  { path: '', canActivate: [AuthGuard], children: [
    {path: 'employee', component: EmployeeComponent},
    {path: 'worked-days', component: WorkedDaysComponent},
    {path: '', component: HeaderComponent, outlet: 'header'}
  ]},

  // otherwise redirect to home
  {path: '**', redirectTo: 'employee'},
];

export const routing = RouterModule.forRoot(appRoutes);
