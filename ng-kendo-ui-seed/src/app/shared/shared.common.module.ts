import { NgModule } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NavBarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './statics/page-not-found.component';
import { RouterModule } from '@angular/router';
const IMPORTS = [
  LayoutModule
];
const DECLARATIONS = [NavBarComponent, PageNotFoundComponent];
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    ...IMPORTS
  ],
  exports: [
    ...IMPORTS,
    ...DECLARATIONS
  ],
  declarations: [
    ...DECLARATIONS
  ]
})
export class SharedCommonModule { }
