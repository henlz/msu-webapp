export class WorkedDay {
  id: number;
  days: Array<string>;
  salary: number;
  total_paid: number;
  extra: number;
  deductions: number;
  observations: string;
  week_number: number;
  employee_id: number;

  constructor(workedDay?: WorkedDay) {
    if (workedDay) {
      this.id = workedDay.id;
      this.days = workedDay.days;
      this.salary = workedDay.salary;
      this.total_paid = workedDay.total_paid;
      this.extra = workedDay.extra;
      this.deductions = workedDay.deductions;
      this.observations = workedDay.observations;
      this.week_number = workedDay.week_number;
      this.employee_id = workedDay.employee_id;
    } else {
      this.days = [];
    }
  }
}

