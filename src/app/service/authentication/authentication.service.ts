import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SignInData } from 'src/app/model/signInData'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new SignInData('johndoe@gmail.com', 'test123');

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private router : Router) {}

  authenticate(signInData: SignInData): boolean {
    if(this.checkCredentials(signInData)){

      this.setLoggedIn(true);
      this.router.navigate(['home']);
      return true;
      
    }
    this.setLoggedIn(false);
    return false;
  }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  private checkCredentials(SignInData: SignInData): boolean {
    return this.checkEmail(SignInData.getEmail()) && this.checkPassword(SignInData.getPassword());
  }

  private checkEmail(email: string): boolean{
    return email === this.mockedUser.getEmail();
  }

  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }

  logout() {
    this.setLoggedIn(false);
    localStorage.removeItem('loggedIn');
    this.router.navigate(['']);
  }

}
