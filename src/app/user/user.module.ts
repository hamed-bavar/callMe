import { PostModule } from './../post/post.module';
import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { GlobalModule } from '../global/global.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    DashboardModule,
    PostModule,
    GlobalModule,
  ],
})
export class UserModule {}
