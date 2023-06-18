import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output()
  loginButtonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onLoginButtonClicked() {
    this.loginButtonClicked.emit(true);
  }
}
