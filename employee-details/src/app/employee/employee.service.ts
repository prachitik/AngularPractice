import {Injectable} from '@angular/core';
import { IEmployee } from './employee';


@Injectable()   // To inject any dependencies into our service class
export class EmployeeService{

    getEmployees() : IEmployee[]{
        return [
            {code : 'emp01', name : 'Tom', gender : 'Male', annualSalary: 5500, dateOfBirth : '6/25/1988'},
            {code : 'emp02', name : 'Alex', gender : 'Male', annualSalary: 5700.95, dateOfBirth : '9/6/1982'},
            {code : 'emp03', name : 'Mike', gender : 'Male', annualSalary: 5900, dateOfBirth : '8/12/1979'},
            {code : 'emp04', name : 'Mary', gender : 'Female', annualSalary: 6500.286, dateOfBirth : '10/14/1984'},
            {code : 'emp05', name : 'Nancy', gender : 'Female', annualSalary: 6900, dateOfBirth : '12/15/1982'}
        ];
    }

}