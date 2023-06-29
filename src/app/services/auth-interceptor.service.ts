import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./authentication.service";

@Injectable({ providedIn: "root" })
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    token = this.authService.user?.token;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.token) {
            const authReq = req.clone({ headers: new HttpHeaders({ 'Authorization': this.token }) })
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}
