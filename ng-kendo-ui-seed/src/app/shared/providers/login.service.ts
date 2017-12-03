import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable ()
export class LoginService {
  constructor(private http: Http, private router: Router) {
  }

  get isUserLoggedIn() {
    return Observable.of (this._hasSessionToken ());
  }

  public login(credentials: { username: string, password: string }) {
    return this.http.post ('login', credentials).map ((res: Response) => res.json ()).map (this.validate).do ((loginInfo) => {
      this.store (loginInfo);
    })
  }

  public logout() {
    this.clearSession ();
    this.router.navigateByUrl ('/login');
  }

  public clearSession() {
    sessionStorage.removeItem ('access_token');
  }

  private validate(loginInfo: any) {
    if (!loginInfo.token) {
      return Observable.throw ('Invalid token!');
    }
    return loginInfo;
  }

  private _hasSessionToken(): boolean {
    return !!sessionStorage.getItem ('access_token');
  }

  private store(loginInfo: any) {
    sessionStorage.setItem ('access_token', loginInfo.token);
  }
}
