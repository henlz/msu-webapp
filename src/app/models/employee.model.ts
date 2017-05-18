import { EmployeeRole } from './employee-role.enum';

export class Employee {
  id: number;
  name: string;
  role: EmployeeRole;
  birth_date: Date;

  constructor(employee?: Employee) {
    if (employee) {
      this.id = employee.id;
      this.name = employee.name;
      this.role = employee.role;
      this.birth_date = employee.birth_date;
    }
  }
}
