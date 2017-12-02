import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/statics/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule ({
  imports: [RouterModule.forRoot (routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
