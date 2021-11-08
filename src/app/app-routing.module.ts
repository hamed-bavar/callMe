import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthOnLoadGuard } from './auth/auth-on-load.guard';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  {
    path: 'dashboard',
    canLoad: [AuthOnLoadGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
