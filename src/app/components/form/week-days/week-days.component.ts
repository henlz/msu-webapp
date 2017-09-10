import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.css']
})
export class WeekDaysComponent implements OnInit {
  @Input() days: Array<string>;
  @Output() daysChange = new EventEmitter<Array<string>>();

  constructor() {
  }

  ngOnInit() {
    if (!this.days) {
      this.daysChange.emit([]);
    }
  }

  toggleDays(toggledDay: string) {
    if (this.days.find(item => item === toggledDay)) {
      this.daysChange.emit((this.days.filter(item => item === toggledDay)));
    } else {
      const arrayCopy = this.days.slice();
      arrayCopy.push(toggledDay);

      this.daysChange.emit(arrayCopy);
    }
  }
}
