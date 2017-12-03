// imports @angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// imports @progress modules
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import custom module and classes
import { PageNotFoundComponent } from './statics/page-not-found.component';
import { NavBarComponent } from './navbar/navbar.component';
import { LOGIN_GUARD_PROVIDER } from './providers/logged-in-guard';
import { LoginService } from './providers/login.service';
import { customHttpProvider } from './providers/custom.http.provider';

const IMPORTS = [
  LayoutModule,
  InputsModule,
  ButtonsModule
];
const PROVIDERS = [LOGIN_GUARD_PROVIDER, LoginService, customHttpProvider ()];
const DECLARATIONS = [NavBarComponent, PageNotFoundComponent];
@NgModule ({
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...IMPORTS,
    ...DECLARATIONS
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpModule,
    ...IMPORTS
  ],
  providers: [...PROVIDERS]
})
export class SharedCommonModule {
}
