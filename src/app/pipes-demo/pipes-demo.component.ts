import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {
  strData:string;
  numData:number;
  date:Date;

  constructor() { 
    this.strData="Hello welcome to the SPA";
    this.numData=Math.PI;
    this.date=new Date();
  }
}
