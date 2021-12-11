import { GlobalModule } from './../global/global.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardOptionsComponent } from './dashboard-options/dashboard-options.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSkeletonComponent } from './profile-skeleton/profile-skeleton.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostModule } from '../post/post.module';
import { NotifsComponent } from './notifs/notifs.component';
import { NotifComponent } from './notifs/notif/notif.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendComponent } from './friends/friend/friend.component';
@NgModule({
  declarations: [
    HomeComponent,
    DashboardOptionsComponent,
    ProfileComponent,
    ProfileSkeletonComponent,
    EditProfileComponent,
    NotifsComponent,
    NotifComponent,
    FriendsComponent,
    FriendComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    PostModule,
    GlobalModule,
  ],
  exports: [ProfileComponent, ProfileSkeletonComponent],
  providers: [],
})
export class DashboardModule {}
