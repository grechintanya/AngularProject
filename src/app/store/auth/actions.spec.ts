import { User } from 'src/app/utils/public_api';
import * as authActions from './actions';

describe('AuthState action creators', () => {
    
    describe('Action creators for user login event', () => {

        const user: User = {
            id: 1,
            token: 'fake token',
            name: {first: 'john', last: 'dou'},
            login: 'test',
            password: '1234'
        }

        it('login should create a login action', () => {
            const action = authActions.login({ login: 'test', password: '1234' });
            expect(action.type).toEqual('[Auth] Login');            
        });

        it('login action payload should have login and password property', () => {
            const action = authActions.login({ login: 'test', password: '1234' });
            expect(action.login).toEqual('test');            
            expect(action.password).toEqual('1234');            
        });

        it('loginSuccess should create a "login success" action with user property', () => {
            const action = authActions.loginSuccess({user: user});
            expect(action.type).toEqual('[Auth] Login success');
            expect(action.user).toEqual(user);
        });

        it('loginFailure should create a "login failure" action with error property', () => {
            const action = authActions.loginFailure({error: 'error'});
            expect(action.type).toEqual('[Auth] Login failure');
            expect(action.error).toEqual('error');
        });
    });

    describe('Action creators for user logout event', () => {
        it('logout should create a logout action', () => {
            const action = authActions.logout();
            expect(action.type).toEqual('[Auth] Logout');            
        });
    })
})