import { User } from "../utils/public_api";

export class AuthService {

    user: User = {
        id: 1,
        userName: 'tanya',
        email: 'tanya@email.com',
        password: 'qwerty'
    }

    token = `ocRhi=-QMGck4RXFC2wfS/1LilN6FP3g2nXZNh4xytniAFLPkq0QuQqjX-?OM-ETO-Hz2I/hCNiYo!s/AO1y4DOB3B8NCD?=LnX-n6QLFm3exiejY6PiuzjZa?oxmsJE-qhKre1=Uv21?AFHH84gCxHjZBs8uIZVtgFpXKcLwQxCOPb=
            SMCPItqLgg0Yyys8VQ9Vluezo0nB5cIgMuWKtIjEfrpjfjNhbXHf46-yc4FTaVArV6?dqCsMtUa3hSex`

    isAuthenticated = true

    login() {
        localStorage.setItem('userName', this.user.userName);
        localStorage.setItem('token', this.token);
        this.isAuthenticated = true;
    }

    logout() {
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        this.isAuthenticated = false;
    }

    getUserInfo() {
        return this.user.userName
    }
}