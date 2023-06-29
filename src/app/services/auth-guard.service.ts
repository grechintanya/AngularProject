import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { map, Observable, of, switchMap } from "rxjs";
import { AuthService } from "./authentication.service";

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.authEmitter.pipe(map(value => {
            if (value) {
                return true;
            } else {
                this.router.navigateByUrl('login');
                return false;
            }
        }))
    }
}
