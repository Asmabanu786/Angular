import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  webTitle:string;
  welcomeImage:string;
  welcomeText:string;
  constructor() {
    this.webTitle="Angular SPA demo";
    this.welcomeText="Doreamon welcomes you to this page";
    this.welcomeImage="assets/images/download.png";
  }
}
