export interface Employee {
  id: string;
  title: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  employeeType: EmployeeType;
}

export interface EmployeeType {
  id: string;
  name: string;
  description: string;
}
