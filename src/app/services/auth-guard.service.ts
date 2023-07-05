import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable, } from "rxjs";
import { AppState } from "../store/appState.interface";
import { selectIsAuth } from "../store/auth";

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private store: Store<AppState>) { }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.select(selectIsAuth).pipe(map(value => {
            if (value) {
                return true;
            } else {
                this.router.navigateByUrl('login');
                return false;
            }
        }))
    }
}
