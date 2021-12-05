import { PostModule } from './../post/post.module';
import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
@NgModule({
  declarations: [HomeComponent, UserPostsComponent],
  imports: [CommonModule, UserRoutingModule, DashboardModule, PostModule],
})
export class UserModule {}
