import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { AuthService } from "src/app/services";
import { Token, User } from "src/app/utils/public_api";
import * as AuthActions from './actions';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService,
        private router: Router) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(ofType(AuthActions.login),
            mergeMap(action => {
                return this.authService.login({login: action.login, password: action.password}).pipe(
                    switchMap((token) => {
                        return this.authService.getUserInfo(token as Token).pipe(
                            map(user => AuthActions.loginSuccess({user: user as User})),
                            catchError(error => of(AuthActions.loginFailure({ error: error.error }))),        
                        )
                    }),
                    catchError(error => of(AuthActions.loginFailure({ error: error.error }))),
                    )
            }), tap(() => this.router.navigateByUrl('/courses')));
    });

}

