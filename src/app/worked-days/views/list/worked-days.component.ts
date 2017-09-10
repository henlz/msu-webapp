import { DataSource } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MdPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { WorkedDay } from '../../models/worked-day';
import { WorkedDaysService } from '../../services/worked-days.service';

@Component({
  selector: 'app-worked-days',
  templateUrl: './worked-days.component.html',
  styleUrls: ['./worked-days.component.css']
})
export class WorkedDaysComponent implements OnInit {
  @ViewChild(MdPaginator) paginator: MdPaginator;

  dataSource: WorkedDayDataSource;
  displayedColumns = ['employee', 'week_number', 'total', 'worked_days', 'actions'];

  constructor(private service: WorkedDaysService,
              private changeDetector: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit() {
    this.paginator.pageIndex = 1;
    this.paginator.pageSize = 10;
    this.paginator.pageSizeOptions = [5, 10, 25, 50];

    this.dataSource = new WorkedDayDataSource(this.service, this.paginator);

    this.changeDetector.detectChanges();
  }

  redirectToForm() {
    this.router.navigate(['/worked-days/form/']);
  }
}

class WorkedDayDataSource extends DataSource<WorkedDay> {
  connect(): Observable<WorkedDay[]> {
    return this.workedDaysService.getWorkedDays(this._paginator.pageIndex).map(data => {
      this._paginator.length = data.count;
      return data.results;
    });
  }

  disconnect(): void {
  }

  constructor(private workedDaysService: WorkedDaysService, private _paginator: MdPaginator) {
    super();
  }
}
