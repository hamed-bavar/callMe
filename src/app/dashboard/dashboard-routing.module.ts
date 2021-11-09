import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: PostsComponent },
      { path: 'notifications' },
      { path: 'followers' },
      { path: 'following' },
      { path: 'create_post' },
      { path: 'edit_post', component: EditProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
