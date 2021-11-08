import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '../auth/auth-http-interceptor';
import { DashboardOptionsComponent } from './dashboard-options/dashboard-options.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [HomeComponent, PostsComponent, DashboardOptionsComponent, ProfileComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  providers: [],
})
export class DashboardModule {}
