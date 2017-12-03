import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LoginService } from '../shared/providers/login.service';

@Component({
  selector: 'ng-k-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isNewUser: boolean = false;
  constructor(private _ls: LoginService, private _router: Router) { }
  toggleSignIn(type){
    this.isNewUser = type;
  }
  onSubmit(form: NgForm){
    if(form.valid){
      this._ls.login(form.value).map((userInfo) => {
        return this._ls.isUserLoggedIn;
      }).subscribe((isLogin) => this._router.navigateByUrl('/home'));
    }
  }
  ngOnInit() {
  }

}
