import {Component} from '@angular/core';
import {IEmployee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl : './employeeList.component.html',
    styleUrls : ['./employeeList.component.css'],
    providers : [EmployeeService]
})
export class EmployeeListComponent{
    //employees: any[];
    employees : IEmployee[];

    selectedEmployeeCountRadioButton: string = "All";

    private _employeeService: EmployeeService;


    constructor(_employeeService: EmployeeService){
        this._employeeService = _employeeService;

        this.employees = this._employeeService.getEmployees();
        //this.employees=[
            // {code : 'emp01', name : 'Tom', gender : 'Male', annualSalary: 5500, dateOfBirth : '6/25/1988'},
            // {code : 'emp02', name : 'Alex', gender : 'Male', annualSalary: 5700.95, dateOfBirth : '9/6/1982'},
            // {code : 'emp03', name : 'Mike', gender : 'Male', annualSalary: 5900, dateOfBirth : '8/12/1979'},
            // {code : 'emp04', name : 'Mary', gender : 'Female', annualSalary: 6500.286, dateOfBirth : '10/14/1984'},
            // {code : 'emp05', name : 'Nancy', gender : 'Female', annualSalary: 6900, dateOfBirth : '12/15/1982'}
            //Instead hard-coding employee details here, we can use service to fetch the details
        //];
    } 
    // getEmployees():void{
    //     this.employees =[
    //         {code : 'emp01', name : 'Tom', gender : 'Male', annualSalary: 5500, dateOfBirth : '6/25/1988'},
    //         {code : 'emp02', name : 'Alex', gender : 'Male', annualSalary: 5700.95, dateOfBirth : '9/6/1982'},
    //         {code : 'emp03', name : 'Mike', gender : 'Male', annualSalary: 5900, dateOfBirth : '8/12/1979'},
    //         {code : 'emp04', name : 'Mary', gender : 'Female', annualSalary: 6500.286, dateOfBirth : '10/14/1984'},
    //         {code : 'emp05', name : 'Nancy', gender : 'Female', annualSalary: 6900, dateOfBirth : '12/15/1982'}
    //     ];
    // }

    trackByEmpCode(index:number,employee:any): string {
        return employee.code
    }
    
    getTotalEmployeesCount() : number{
        return this.employees.length;
    }

    getTotalMaleEmployeesCount() : number{
        return this.employees.filter(e => e.gender==="Male").length;
    }

    getTotalFemaleEmployeesCount() : number{
        return this.employees.filter(e => e.gender==="Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue:string): void{
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}