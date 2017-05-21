import { EmployeeRole } from './employee-role.enum';

export class Employee {
  id: number;
  name: string;
  ssn: string;
  driver_license: string;
  address: string;
  day_start_work: Date;
  role: EmployeeRole;
  birth_date: Date;

  constructor(employee?: Employee) {
    if (employee) {
      this.id = employee.id;
      this.name = employee.name;
      this.role = employee.role;
      this.birth_date = employee.birth_date;
      this.ssn = employee.ssn;
      this.address = employee.address;
      this.day_start_work = employee.day_start_work;
    }
  }
}
