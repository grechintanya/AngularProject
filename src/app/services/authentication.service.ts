import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, of } from "rxjs";
import { baseURL, Login, Token, User } from "../utils/public_api";


@Injectable({ providedIn: "root" })
export class AuthService {

    constructor(private http: HttpClient, private router: Router) { }

    user!: User;

    isAuthenticated = false;

    private handleError<T>(operation: string, result?: T) {
        return (error: any): Observable<T> => {
            alert(`${operation}: ${error.error}`);
            return of(result as T);
        }
    }

    loginButtonClicked = new EventEmitter<boolean>();

    onLoginButtonClicked(isAuth: boolean) {
        this.loginButtonClicked.emit(isAuth);
    }

    login(loginObj: Login) {
        this.http.post(`${baseURL}/auth/login`, loginObj)
            .pipe(catchError(this.handleError('Login')))
            .subscribe(data => {
                this.getUserInfo(data as Token);
                this.isAuthenticated = true;
            });
    }

    logout() {
        this.isAuthenticated = false;
    }

    getUserInfo(tokenObj: Token) {
        this.http.post(`${baseURL}/auth/userinfo`, tokenObj)
        .pipe(catchError(this.handleError('GetUserInfo')))
        .subscribe(data => {
            if (data) {
                this.user = data as User;
                this.user.token = tokenObj?.token;
                this.onLoginButtonClicked(true);
                this.router.navigateByUrl('courses');
            }          
        })
    }
}