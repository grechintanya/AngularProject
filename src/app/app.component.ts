import { Component, OnInit } from '@angular/core';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isAuth = false;

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated;
  }
  
  onLogoutButtonClicked(isAuth: boolean) {
    this.authService.logout();
    this.isAuth = isAuth;
    console.log('Logout');
  }

  onLoginButtonClicked(isAuth: boolean) {
    this.authService.login();
    this.isAuth = isAuth;
    console.log('logged in successfully');
  }

}
