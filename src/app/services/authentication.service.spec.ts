import { TestBed } from '@angular/core/testing';
import { AuthService } from './authentication.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { baseURL } from '../utils/public_api';

describe('AuthService', () => {

    let authService: AuthService;
    let httpController: HttpTestingController;
    const tokenObj = { token: 'fake token' };

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [AuthService], imports: [HttpClientTestingModule] });
        authService = TestBed.inject(AuthService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify();
    });

    it('login method should post login request to the server', () => {
        authService.login({ login: 'login', password: '123' });
        const req = httpController.expectOne(`${baseURL}/auth/login`);
        expect(req.request.method).toEqual('POST');
    });

    it('getUserInfo method should make a post request to the server', () => {
        authService.getUserInfo(tokenObj);
        const req = httpController.expectOne(`${baseURL}/auth/userinfo`);
        expect(req.request.method).toEqual('POST');
    });
})
