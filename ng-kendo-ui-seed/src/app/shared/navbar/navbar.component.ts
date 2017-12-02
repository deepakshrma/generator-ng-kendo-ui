import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-k-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input('routes')
  routes: any[] = [
    {
      path: '/login',
      label: 'Home'
    },
    {
      path: '/About',
      label: 'About',
      children: [
        {
          path: '/about/whoweare',
          label: 'Who We Are'
        },
        {
          path: '/about/whowedo',
          label: 'What We Do'
        }
      ]
    },
    {
      path: '/Portfolio',
      label: 'Portfolio',
      children: [
        {
          path: '/about/Photography',
          label: 'Photography'
        },
        {
          path: '/about/wuid',
          label: 'Web & User Interface Design'
        }
      ]
    },
    {
      path: '/News',
      label: 'News'
    },
    {
      path: '/Contact',
      label: 'Contact'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
