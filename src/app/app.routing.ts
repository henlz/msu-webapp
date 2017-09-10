import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeComponent } from './employee/views/employee.component';
import { LoginComponent } from './modules/login/views/login.component';
import { WorkedDaysFormComponent } from './worked-days/views/form/worked-days-form.component';
import { WorkedDaysComponent } from './worked-days/views/list/worked-days.component';

const appRoutes: Routes = [
  {
    path: 'login', children: [
    {path: '', component: LoginComponent}
  ]
  },

  // Main routes
  {
    path: '', children: [
    {path: 'employee', component: EmployeeComponent},
    {
      path: 'worked-days', children: [
      {path: '', component: WorkedDaysComponent},
      {path: 'form', component: WorkedDaysFormComponent},
      {path: 'form/:id', component: WorkedDaysFormComponent}
    ]
    },
    {path: '', component: HeaderComponent, outlet: 'header'}
  ]
  },

  // otherwise redirect to home
  {path: '**', redirectTo: 'employee'},
];

export const routing = RouterModule.forRoot(appRoutes);
