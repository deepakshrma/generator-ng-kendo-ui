import { Component } from '@angular/core';

@Component ({
  selector: 'ng-k-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  show = false;
  private baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';

  public open() {
    this.show = !this.show;
  }
  private imageUrl(imageName: string): string {
    return this.baseImageUrl + imageName + '.jpg';
  }
}
