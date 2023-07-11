import { authReducer } from "./reducer";
import * as authActions from './actions';
import { AuthState } from "./authState.interface";
import { User } from "src/app/utils/public_api";

describe('AuthReducer', () => {

    let initialState: AuthState;

    const user: User = {
        id: 1,
        token: 'fake token',
        name: {first: 'john', last: 'dou'},
        login: 'test',
        password: '1234'
    }

    beforeEach(() => {
        initialState = {
            isAuthenticated: false,
            isLoading: false,
            error: null,
            user: { token: '' }
        }
    });

    it('should change "isLoading" to true after login action', () => {
        const action = authActions.login({ login: 'test', password: '123' });
        const state = authReducer(initialState, action);
        expect(state.isLoading).toBe(true);
    });

    it('should change "isAthenticated" to true and add a user property after loginSuccess action', () => {
        const action = authActions.loginSuccess({ user: user});
        const state = authReducer(initialState, action);
        expect(state.isLoading).toBe(false);
        expect(state.isAuthenticated).toBe(true);
        expect(state.user).toEqual(user);
    });

    it('should change "isLoading" to false and "error" to error message after loginFailure action', () => {
        const action = authActions.loginFailure({ error: 'test error' });
        const state = authReducer(initialState, action);
        expect(state.isLoading).toBe(false);
        expect(state.error).toBe('test error');
    });

    it('should change "isAthenticated" to false after logout action', () => {
        const action = authActions.logout();
        const state = authReducer(initialState, action);
        expect(state.isAuthenticated).toBe(false);
    });

})