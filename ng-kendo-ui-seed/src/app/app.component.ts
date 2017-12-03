import { Component } from '@angular/core';
import { LoginService } from './shared/providers/login.service';

@Component ({
  selector: 'ng-k-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';
  title = 'app';
  show = false;

  get isUserLoggedIn() {
    return this._ls.isUserLoggedIn;
  }

  constructor(private _ls: LoginService) {
  }

  public open() {
    this.show = !this.show;
  }

  public logout() {
    this._ls.logout ();
  }

  private imageUrl(imageName: string): string {
    return this.baseImageUrl + imageName + '.jpg';
  }
}
