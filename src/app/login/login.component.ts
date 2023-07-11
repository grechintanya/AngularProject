import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/appState.interface';
import { authActions, selectIsLoading, selectError } from '../store/auth';
import { Login } from '../utils/global.models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    showAuthLoader$!: Observable<boolean>;
    authError$!: Observable<string | null>;
    loginForm = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.showAuthLoader$ = this.store.select(selectIsLoading);
        this.authError$ = this.store.select(selectError);
    }

    get login() {
        return this.loginForm.get('login');
    }
    get password() {
        return this.loginForm.get('password');
    }

    onSubmit() {
        this.store.dispatch(authActions.login(this.loginForm.value as Login));
    }

    onCloseClicked() {
        this.store.dispatch(authActions.errorMessageClosed());
    }
}
