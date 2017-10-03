import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlertService} from '../../../services/alert.service';
import {WorkedDay} from '../../models/worked-day.model';
import {WorkedDaysService} from '../../services/worked-days.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {daysIndexes} from '../../worked-days.constants';

@Component({
  selector: 'app-worked-days-form',
  templateUrl: './worked-days-form.component.html',
  styleUrls: ['./worked-days-form.component.css']
})
export class WorkedDaysFormComponent implements OnInit {
  dataSource: WorkedDaysDataSource;
  dataSubject = new BehaviorSubject<any[]>([]);
  weekDays = daysIndexes;
  displayedColumns = ['employee', ...this.weekDays, 'total_paid', 'extra_costs', 'total', 'deductions', 'final_check', 'salary'];

  private workweekList: Array<WorkedDay>;
  private workWeeksToUpdate: Array<WorkedDay> = new Array<WorkedDay>();

  @ViewChild('filter') filter: ElementRef;

  constructor(private service: WorkedDaysService, public alertService: AlertService) {
  }

  ngOnInit() {
    this.dataSource = new WorkedDaysDataSource(this.dataSubject);
    this.service.getWorkedDaysByWeek().subscribe(
      data => this.updateWorkWeekList(data.results)
    );
  }

  onRowUpdate(changeType: string, workWeekId: number, event, fieldName?: string) {
    switch (changeType) {
      case 'numberField':
        const workWeek = this.workweekList.find(item => item.id === workWeekId);
        workWeek[fieldName] = parseFloat(event.target.value);
        this.updateWorkWeekRecordOnList(workWeek);
        break;
      default:
        return true;
    }
  }

  onWeekDayCheck(dayChecked: string, workWeek: WorkedDay) {
    const dayIndex = workWeek.worked_days.findIndex(day => day === dayChecked);
    if (dayIndex !== -1) {
      workWeek.worked_days.splice(dayIndex, 1);
    } else {
      workWeek.worked_days.push(dayChecked);
    }
    this.updateWorkWeekRecordOnList(workWeek);
  }

  updateWorkWeekRecordOnList(newValue: WorkedDay) {
    const itemIndex = this.workweekList.findIndex(workWeek => workWeek.id === newValue.id);
    this.workWeeksToUpdate.push(newValue);
    this.workweekList[itemIndex] = newValue;
  }

  updateWorkWeekList(array: Array<{}>) {
    this.workweekList = array.map(workedDay => new WorkedDay(workedDay));
    this.dataSubject.next(this.workweekList);
  }

  changeCurrentWeek() {
    this.service.getWorkedDaysByWeek(this.filter.nativeElement.value).subscribe(
      data => this.updateWorkWeekList(data.results)
    );
  }

  isDayChecked(workedDay: WorkedDay, day: string) {
    return !!workedDay.worked_days.find(row => row === day);
  }
}


/**
 * @class WorkedDaysDataSource
 * @description
 * Work week table data source class
 */
export class WorkedDaysDataSource extends DataSource<WorkedDay> {
  constructor(private subject: BehaviorSubject<any[]>) {
    super();
  }

  connect(): Observable<any[]> {
    return this.subject.asObservable();
  }

  disconnect(): void {
  }
}
