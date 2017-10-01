export class WorkedDay {
  id: number;
  salary: number;
  total_paid: number;
  extra_costs: number;
  deductions: number;
  observations: string;
  employee_id: number;
  employee_name: string;
  week_number: number;
  worked_days: Array<string>;
  worked_days_label: string;

  constructor(workedDay?) {
    if (workedDay) {
      this.id = workedDay.id;
      this.worked_days = workedDay.worked_days;
      this.worked_days_label = workedDay.worked_days_label;
      this.salary = workedDay.salary;
      this.total_paid = workedDay.total_paid;
      this.extra_costs = workedDay.extra_costs;
      this.deductions = workedDay.deductions;
      this.observations = workedDay.observations;
      this.week_number = workedDay.week_number;
      this.employee_id = workedDay.employee_id;
    } else {
      this.worked_days = [];
    }
  }
}

