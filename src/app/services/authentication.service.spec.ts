import { AuthService } from './authentication.service';

describe('AuthService', () => {
    
    let authService: AuthService;
    
    beforeEach(() => {
        authService = new AuthService();
        authService.user = {
            id: 2,
            userName: 'test',
            email: 'email',
            password: '123'
        };
        authService.token = 'test token';
        localStorage.clear();
    });

    it('login method should save username and token in local storage', () => {
        authService.login();
        expect(localStorage.getItem('userName')).toBe('test');
        expect(localStorage.getItem('token')).toBe('test token');
    });

    it('logout method should remove username and token from local storage', () => {
        localStorage.setItem('userName', 'test');
        localStorage.setItem('token', 'test token');
        authService.logout();
        expect(localStorage.getItem('userName')).toBeNull();
        expect(localStorage.getItem('token')).toBeNull();
    });

    it('getUserInfo method should return a username', () => {
        const userInfo = authService.getUserInfo();
        expect(userInfo).toBe('test');
    });
})
