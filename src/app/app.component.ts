import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
//templateUrl: './app.component.html',
//styleUrls: ['./app.component.css']
export class AppComponent {
  private jobTitle: string = null;
  private salary: number = null;
  private annualSalary: number = null;
  private userName:string=null;
  public constructor() {
    this.jobTitle = "AnalystTrainee";
    this.salary = 22000;
  }

  public getAnnualSalary(): number {
    this.annualSalary = this.salary * 12;
    return this.annualSalary;
  }
  public greetUser(): void {
    this.userName = "Ms." + this.userName;
    alert('welcome' + this.userName);
  }
}
