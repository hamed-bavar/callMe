import { CreatePostComponent } from './../post/create-post/create-post.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetPostsComponent } from '../post/get-posts/get-posts.component';
import { NotifsComponent } from './notifs/notifs.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: GetPostsComponent },
      { path: 'notifications', component: NotifsComponent },
      { path: 'followers' },
      { path: 'following' },
      { path: 'create_post', component: CreatePostComponent },
      { path: 'edit_profile', component: EditProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
