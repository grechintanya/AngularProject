import { createReducer, on } from "@ngrx/store";
import { AuthState } from "./authState.interface";
import * as authActions from './actions';

export const initialAuthState: AuthState = {
    isAuthenticated: false,
    user: {token: ''},
    isLoading: false,
    error: null
};

export const authReducer = createReducer(initialAuthState,
    on(authActions.login, (state): AuthState => ({ ...state, isLoading: true })),
    on(authActions.loginSuccess, (state, { user }): AuthState =>
        ({ ...state, isLoading: false, isAuthenticated: true, user, error: null})),
    on(authActions.loginFailure, (state, { error }): AuthState =>
        ({ ...state, isLoading: false, error })),
    on(authActions.logout, (state): AuthState => ({ ...state, isAuthenticated: false })),
    on(authActions.errorMessageClosed, (state): AuthState => ({...state, error: null}))
);

