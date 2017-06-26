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

import { EmployeeDialogTemplateComponent } from './components/employee-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertService } from './services/alert.service';
import { AuthGuard } from './services/auth.guard';
import { AuthenticationService } from './services/auth.service';
import { EmployeeService } from './services/employee.service';
import { LocationService } from './services/location.service';
import { EmployeeComponent } from './views/employee/employee.component';
import { LoginComponent } from './views/login/login.component';

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
    HeaderComponent
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
