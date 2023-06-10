import { Component } from '@angular/core';
import { AuthService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  email = '';
  password = '';

  onLoginButtonClicked() {
    this.authService.login();
    console.log('logged in successfully');
  }
}
