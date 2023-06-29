import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  isAuth = this.authService.isAuthenticated$;
  userName = '';

  ngOnInit(): void {
    this.authService.authEmitter.subscribe(value => {
      if (value) {
        this.userName = this.authService.user?.name.first;
      }
    })
  }

  onLogoutButtonClicked() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
