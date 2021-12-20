import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Starwars_frontend';
  
  constructor(private router:Router){}
  
// Navigate to people list component
  navigate():void{
    this.router.navigate(['/people']);
  }
}
