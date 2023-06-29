import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Observable, of, tap } from "rxjs";
import { baseURL, Login, Token, User } from "../utils/public_api";
import { LoaderService } from "./loader.service";


@Injectable({ providedIn: "root" })
export class AuthService {

    constructor(private http: HttpClient, private router: Router,
        private loaderService: LoaderService) { }

    user!: User;

    authEmitter = new BehaviorSubject<boolean>(false);
    isAuthenticated$ = this.authEmitter.asObservable();

    private handleError<T>(operation: string, result?: T) {
        return (error: any): Observable<T> => {
            alert(`${operation}: ${error.error}`);
            return of(result as T);
        }
    }

    login(loginObj: Login) {
        this.http.post(`${baseURL}/auth/login`, loginObj)
            .pipe(catchError(this.handleError('Login')), tap(() => this.loaderService.hideLoader()))
            .subscribe(data => {
                this.getUserInfo(data as Token);
            });
    }

    logout() {
        this.authEmitter.next(false);
    }

    getUserInfo(tokenObj: Token) {
        this.http.post(`${baseURL}/auth/userinfo`, tokenObj)
            .pipe(catchError(this.handleError('GetUserInfo')))
            .subscribe(data => {
                if (data) {
                    this.user = data as User;
                    this.user.token = tokenObj?.token;
                    this.authEmitter.next(true);
                    this.router.navigateByUrl('courses');
                }
            })
    }
}