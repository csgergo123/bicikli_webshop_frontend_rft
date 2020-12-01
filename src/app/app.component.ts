import { AuthenticationService } from './service/authentication/authentication.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'routing';


  constructor(public authenticationService : AuthenticationService){
    
  }

  logout(){
    this.authenticationService.logout();
  }
}
