import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/utils/public_api';

export const login = createAction('[Auth] Login', props<{ login: string, password: string }>());
export const loginSuccess = createAction('[Auth] Login success', props<{ user: User }>());
export const loginFailure = createAction('[Auth] Login failure', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');

export const errorMessageClosed = createAction('[Auth] Error message closed');
