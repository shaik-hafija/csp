import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a=true;//starting nav bar
 
  c=false;//registration
  d=false;//login
  e=false;//home page
  title = 'csp';
  signin()
  {
   this.a=false;
    this.c=true;
  }


}
