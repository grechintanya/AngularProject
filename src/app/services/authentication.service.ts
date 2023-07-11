import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseURL, Login, Token } from "../utils/public_api";

@Injectable({ providedIn: "root" })
export class AuthService {

    constructor(private http: HttpClient) { }

    login(loginObj: Login) {
        return this.http.post(`${baseURL}/auth/login`, loginObj)
    }

    getUserInfo(tokenObj: Token) {
        return this.http.post(`${baseURL}/auth/userinfo`, tokenObj)
    }
}