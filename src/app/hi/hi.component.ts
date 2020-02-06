import { Component} from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent{
  userName:string;

  constructor() { 
    this.userName="Hulk";
  }
  greet=()=>{
    alert(`You are still here ${this.userName } Get lost`);
  } 
}
