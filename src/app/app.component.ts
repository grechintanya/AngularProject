import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  isAuth = false;
  userName = '';

  ngOnInit(): void {
    this.authService.loginButtonClicked.subscribe((data: boolean) => {
      this.isAuth = data;
      if (this.isAuth) this.userName = this.authService.user?.name.first;
    } )

  }

  onLogoutButtonClicked(isAuth: boolean) {
    this.authService.logout();
    this.isAuth = isAuth;
    this.router.navigateByUrl('login');
  }
}
