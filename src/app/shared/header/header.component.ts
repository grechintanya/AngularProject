import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService) {  }

  isAuth = this.authService.isAuthenticated;
  userName = this.authService.getUserInfo();

  onLogoutButtonClicked() {
    this.authService.logout();
    console.log('Logout');
  }
}
