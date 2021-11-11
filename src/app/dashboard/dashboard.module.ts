import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { DashboardOptionsComponent } from './dashboard-options/dashboard-options.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSkeletonComponent } from './profile-skeleton/profile-skeleton.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent,
    DashboardOptionsComponent,
    ProfileComponent,
    ProfileSkeletonComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class DashboardModule {}
