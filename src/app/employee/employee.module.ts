import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmployeeService } from './services/employee.service';
import { LocationService } from './services/location.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EmployeeService,
    LocationService
  ],
  declarations: []
})
export class EmployeeModule {
}
