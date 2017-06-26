import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSelectModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDataTableModule } from 'ng2-md-datatable';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeService } from './modules/employee/services/employee.service';
import { LocationService } from './modules/employee/services/location.service';

import { EmployeeDialogTemplateComponent } from './modules/employee/views/employee-dialog.component';
import { EmployeeComponent } from './modules/employee/views/employee.component';
import { AuthGuard } from './modules/login/services/auth.guard';
import { AuthenticationService } from './modules/login/services/auth.service';
import { LoginComponent } from './modules/login/views/login.component';
import { WorkedDaysService } from './modules/worked-days/services/worked-days.service';
import { WorkedDaysComponent } from './modules/worked-days/views/worked-days.component';
import { AlertService } from './services/alert.service';

const materialImports = [
  BrowserAnimationsModule,
  MdToolbarModule,
  MdListModule,
  MdIconModule,
  MdButtonModule,
  MdDialogModule,
  MdInputModule,
  MdSelectModule,
  MdSidenavModule,
  MdCardModule,
  MdSnackBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDialogTemplateComponent,
    LoginComponent,
    EmployeeComponent,
    HeaderComponent,
    WorkedDaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ...materialImports,
    MdDataTableModule,
    FlexLayoutModule,
    routing
  ],
  providers: [
    AlertService,
    EmployeeService,
    WorkedDaysService,
    LocationService,
    AuthenticationService,
    AuthGuard
  ],
  entryComponents: [
    EmployeeDialogTemplateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
