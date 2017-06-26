import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../models/employee.model';
import { Location } from '../models/location.model';
import { AbstractService } from './abstract.service';

@Injectable()
export class LocationService extends AbstractService<Employee> {
  private endpoint: string;

  constructor(protected http: Http) {
    super(http);
    this.endpoint = 'locations/';
  }

  getLocations(): Observable<Array<Location>> {
    return this.getList(this.endpoint);
  }
}
