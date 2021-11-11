import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { PostRoutingModule } from './post-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { GetPostsComponent } from './get-posts/get-posts.component';
import { StepImageComponent } from './create-post/step-image/step-image.component';
import { StepCompleteComponent } from './create-post/step-complete/step-complete.component';
@NgModule({
  declarations: [
    CreatePostComponent,
    GetPostsComponent,
    StepImageComponent,
    StepCompleteComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
  ],
  exports: [CreatePostComponent, GetPostsComponent],
})
export class PostModule {}
