import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PaginatedList } from '../../models/paginated-list.model';
import { AbstractService } from '../../services/abstract.service';
import { WorkedDay } from '../models/worked-day';

@Injectable()
export class WorkedDaysService extends AbstractService<WorkedDay> {
  private endpoint: string;

  constructor(protected http: Http, protected _router: Router) {
    super(http, _router);
    this.endpoint = 'v1/workweek/';
  }

  saveWorkedDay(workedDay: WorkedDay): Observable<WorkedDay> {
    return this.post(this.endpoint, workedDay);
  }

  getWorkedDays(page = 1): Observable<PaginatedList> {
    return this.getList(this.endpoint + '?page=' + page);
  }

  getDetail(id) {
    return this.get(this.endpoint + id);
  }
}
