import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HiComponent } from './hi/hi.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { VerbalPipe } from './pipes/verbal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HiComponent,
    PipesDemoComponent,
    VerbalPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
