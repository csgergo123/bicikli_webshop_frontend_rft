import { AuthenticationService } from './../../service/authentication/authentication.service';
import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from './../../app.cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faUser = faUser;
  faSearch = faSearch;

  constructor(
    public authenticationService : AuthenticationService,
    private cartService: CartService,
    ) { }

  ngOnInit(): void {
  }

  calcTotal() {
    let counter = 0;
    for (let i = 0; i < this.cartService.getItems().length; i++) {
      counter++;
    }
    return counter;
  }

  logout(){
    this.authenticationService.logout();
  }

}
