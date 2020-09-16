import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html'
  template: `Your text <input type="text" [(ngModel)]='userText'>
            <br/><br/>
            <simple [simpleInput]='userText'></simple>
            <br/><br/>
            <list-employee></list-employee>`
})
export class AppComponent {
  title = 'employee-details';
  pageHeader: string = 'Employee Details';
  page: string = null;
  imagePath: string = 'https://cdn.ngcareers.com/public/img/company/logo/2016/08/19/79094e1a00bdff2e2d2458a6d69f7a22pragmatic-technologies.png';

  firstName: string = 'Tom';
  lastName: string = 'Hopkins'; 
  isDisabled : boolean = false;

  userText : string = 'Pragim';

  
  getFullName() : string {
    return this.firstName+' '+ this.lastName;
  }

  onClick() : void{
    console.log("Button clicked");
  }

}
