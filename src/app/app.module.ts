import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdPaginatorModule,
  MdSelectModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdTableModule,
  MdToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WeekDaysComponent } from './components/form/week-days/week-days.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeModule } from './employee/employee.module';

import { EmployeeDialogTemplateComponent } from './employee/views/employee-dialog.component';
import { EmployeeComponent } from './employee/views/employee.component';
import { AuthGuard } from './modules/login/services/auth.guard';
import { AuthenticationService } from './modules/login/services/auth.service';
import { LoginComponent } from './modules/login/views/login.component';
import { AlertService } from './services/alert.service';
import { WorkedDaysService } from './worked-days/services/worked-days.service';
import { WorkedDaysFormComponent } from './worked-days/views/form/worked-days-form.component';
import { WorkedDaysComponent } from './worked-days/views/list/worked-days.component';

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
  MdSnackBarModule,
  MdTableModule,
  MdPaginatorModule,
  MdCheckboxModule
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDialogTemplateComponent,
    LoginComponent,
    EmployeeComponent,
    HeaderComponent,
    WorkedDaysComponent,
    WorkedDaysFormComponent,
    WeekDaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ...materialImports,
    MdTableModule,
    FlexLayoutModule,
    routing,
    EmployeeModule
  ],
  providers: [
    AlertService,
    WorkedDaysService,
    AuthenticationService,
    AuthGuard
  ],
  entryComponents: [
    EmployeeDialogTemplateComponent,
    WeekDaysComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
