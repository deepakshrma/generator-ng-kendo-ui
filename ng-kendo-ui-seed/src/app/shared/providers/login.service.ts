import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable ()
export class LoginService {
  constructor(private http: Http) {
  }

  public login(credentials: { username: string, password: string }) {
    return this.http.post ('login', credentials).map((res: Response) => res.json()).map (this.validate).do ((loginInfo) => {
      this.store (loginInfo);
    })
  }

  public isUserLoggedIn() {
    if (sessionStorage.getItem ('access_token')) {
      return Observable.of (true);
    }
    return Observable.of (false);
  }

  private validate(loginInfo: any) {
    if (!loginInfo.token) {
      return Observable.throw ('Invalid token!');
    }
    return loginInfo;
  }

  private store(loginInfo: any) {
    sessionStorage.setItem ('access_token', loginInfo.token);
  }
}
