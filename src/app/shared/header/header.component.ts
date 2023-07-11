import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/appState.interface';
import { selectIsAuth, selectUserName, authActions } from 'src/app/store/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private store: Store<AppState>) { }

  isAuth$!: Observable<boolean>;
  userName$!: Observable<string | undefined>;

  ngOnInit(): void {
    this.isAuth$ = this.store.select((selectIsAuth));
      if (this.isAuth$) {
        this.userName$ = this.store.select(selectUserName);
    }
  }

  onLogoutButtonClicked() {
    this.store.dispatch(authActions.logout());
    this.router.navigateByUrl('login');
  }
}
