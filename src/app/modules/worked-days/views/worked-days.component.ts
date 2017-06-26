import { Component, OnInit } from '@angular/core';
import { PaginatedList } from '../../../models/paginated-list.model';
import { WorkedDaysService } from '../services/worked-days.service';

@Component({
  selector: 'app-worked-days',
  templateUrl: './worked-days.component.html',
  styleUrls: ['./worked-days.component.css']
})
export class WorkedDaysComponent implements OnInit {
  paginatedList = new PaginatedList();

  constructor(private service: WorkedDaysService) {
  }

  ngOnInit() {
    this.loadWorkedDays();
  }

  loadWorkedDays() {
    this.service.getWorkedDays(1).subscribe(data => this.paginatedList = data);
  }
}
