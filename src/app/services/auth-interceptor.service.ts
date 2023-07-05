import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";

import { selectAuthToken } from '../store/auth';
import { AppState } from "../store/appState.interface";
import { Store } from "@ngrx/store";

@Injectable({ providedIn: "root" })
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<AppState>) { }

    token$ = this.store.select(selectAuthToken);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.token$.pipe(switchMap(value => {
            if (value) {
                const authReq = req.clone({ headers: new HttpHeaders({ 'Authorization': value }) })
                return next.handle(authReq);                
            } else {
                return next.handle(req);    
            }
        }))
    }
}
