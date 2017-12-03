import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

export class LoggedInUserGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) { /**/
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    | Observable<boolean>
    | Promise<boolean> {
    return this.loginService.isUserLoggedIn.do ((isLoggedIn) => {
      if (!isLoggedIn) {
        this.router.navigateByUrl ('/login');
      }
    });
  }
}

export function FOR_ROOT(router: Router, loginService: LoginService) {
  return new LoggedInUserGuard (router, loginService);
}
export const LOGIN_GUARD_PROVIDER = {
  provide: LoggedInUserGuard,
  useFactory: FOR_ROOT,
  deps: [Router, LoginService]
};
