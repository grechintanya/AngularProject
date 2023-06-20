import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  email = '';
  password = '';

    onLoginButtonClicked() {
    this.authService.login();
    this.router.navigateByUrl('courses');
    }
}
