import { LogoutComponent } from './global/logout/logout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthOnLoadGuard } from './auth/auth-on-load.guard';
import { ExploreComponent } from './explore/explore.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthActiveGuardGuard } from './auth/auth-active-guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  {
    path: 'explore',
    component: ExploreComponent,
    canActivate: [AuthActiveGuardGuard],
  },
  {
    path: 'dashboard',
    canLoad: [AuthOnLoadGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'user',
    canLoad: [AuthOnLoadGuard],
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule),
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
