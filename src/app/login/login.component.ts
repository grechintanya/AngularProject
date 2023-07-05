import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/appState.interface';
import { authActions, selectIsLoading, selectError } from '../store/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private store: Store<AppState>) {
    this.showAuthLoader$ = this.store.select(selectIsLoading);
    this.authError$ = this.store.select(selectError);
   }

  login = '';
  password = '';

  showAuthLoader$!: Observable<boolean>;
  authError$: Observable<string | null>;

  onLoginButtonClicked() {
    this.store.dispatch(authActions.login({ login: this.login, password: this.password }));
    this.login = '';
    this.password = '';
  }

  onCloseClicked() {
    this.store.dispatch(authActions.errorMessageClosed());
  }
}
